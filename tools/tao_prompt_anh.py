"""Tạo lại danh sách prompt ảnh cho mọi cấp, mỗi ảnh một "diện mạo" riêng.

Chạy:  python3 tools/tao_prompt_anh.py   (cần node để đọc dữ liệu bài học)
Xuất:  docs/prompt-anh-<cap>.csv  và  docs/prompt-anh-<cap>-16x9.txt  (dòng: ten.jpg | prompt)

Vì sao ảnh cũ na ná nhau: mỗi prompt bị gắn chung một đoạn đuôi dài về phong cách,
lấn át phần cảnh. Bản này rút gọn phần chung và xoay vòng 5 trục: góc máy, ánh sáng,
bảng màu, cảm xúc, chất liệu. Cảnh đã tự nêu góc máy / ánh sáng thì giữ nguyên của cảnh.
"""
import csv, json, re, subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"

CAST = {
    "tieu-hoc": "Children are Vietnamese kids aged 6 to 10 with black hair, round faces and rosy cheeks, in white school shirts with red scarves; adults are Vietnamese.",
    "thcs": "Kids are Vietnamese students aged 12 to 15 with black hair, in white school shirts; adults are Vietnamese.",
    "thpt": "Teenagers are Vietnamese students aged 16 to 18 with black hair, in white school shirts with dark trousers or skirts; adults are Vietnamese aged 25 to 55 from varied professions, with natural adult proportions, dressed in clothing that fits their job.",
    "di-lam": "People are Vietnamese adults with East Asian features, dressed for modern Vietnamese workplaces.",
    "trang-chu": "All people are Vietnamese with East Asian features and black hair.",
}
ROBI = "Robi is a small round glossy orange robot mascot with big navy eyes and a tiny antenna."
STYLE = "3D animated feature-film look, stylized characters with big expressive eyes, richly detailed environment."
TAIL = "No text, no letters, no numbers, no logos, no real people."

CAMERA = ["wide establishing shot", "medium shot at eye level", "close-up on faces and hands",
          "low-angle hero shot", "high-angle bird's-eye view", "over-the-shoulder shot",
          "isometric miniature diorama view", "dynamic tilted action shot",
          "symmetrical centered composition", "side view with strong foreground depth"]
LIGHT = ["soft morning sunlight", "bright clean midday daylight", "golden hour backlight",
         "blue hour twilight with city lights", "cozy warm lamp light at night",
         "dramatic single spotlight with deep shadows", "soft overcast diffused light",
         "neon night ambience"]
PALETTE = ["warm orange and teal palette", "pastel candy palette", "deep navy and gold palette",
           "fresh green and sunny yellow palette", "magenta and cyan pop palette",
           "terracotta and cream palette", "cool blue and silver palette",
           "muted vintage palette with one red accent"]
LIGHT_IN = ["soft morning sunlight through windows", "warm afternoon window light", "cozy warm lamp light",
            "bright clean daylight", "dramatic spotlight with soft shadows",
            "evening glow with city lights outside the windows"]
INDOOR = r"\b(classroom|office|room|hall|library|desk|studio|warehouse|branch|cafe|home|kitchen|lab|interior)\b"
RENDER = ["smooth glossy 3D render", "soft clay-like 3D render", "toy miniature tilt-shift render",
          "smooth glossy 3D render", "painterly 3D render with soft brush textures",
          "smooth glossy 3D render", "paper-craft layered 3D render"]

CAM_WORDS = r"\b(shot|close-up|closeup|view|isometric|diorama|angle|perspective|flat-lay|two-shot)\b"
LIGHT_WORDS = r"\b(light|lighting|lit|sunrise|sunset|sunlight|golden hour|night|morning|evening|dusk|dawn|neon|spotlight|lamp|moonlight)\b"


# Người đi làm: người lớn 25–50 tuổi, đa ngành nghề, nơi làm việc thanh lịch, sáng, hiện đại, nhiều thiết bị.
ADULT_CAST = ("The main characters are Vietnamese working adults aged 25 to 50 with East Asian features and natural adult proportions, "
              "dressed in modern professional or work attire that fits their job (blazers, shirts, blouses, work jackets, uniforms of their trade).")
ADULT_STYLE = ("Stylized 3D animated feature-film look with realistic adult proportions and expressive faces. "
               "Elegant, airy, brightly lit modern workplace with large windows, clean lines, plants, "
               "computer monitors, laptops, tablets and smart devices, showing that working with AI is natural and essential.")
ADULT_PALETTE = ["warm white, light wood and teal accents", "soft grey and navy with warm orange accents",
                 "cream and sage green with brass details", "cool white and sky blue with coral accents",
                 "light oak and charcoal with golden highlights", "pearl white and emerald accents"]
ADULT_RENDER = ["smooth glossy 3D render", "soft painterly 3D render", "clean architectural-visualization 3D render"]


def build_adult(i, scene, ratio):
    scene = scene.strip().rstrip(".")
    extra = []
    if not re.search(CAM_WORDS, scene, re.I):
        extra.append(CAMERA[i % len(CAMERA)])
    if not re.search(LIGHT_WORDS + r"|daylight|skylight", scene, re.I):
        extra.append(["bright natural daylight", "soft morning sunlight through tall windows",
                      "warm golden-hour sunlight through glass"][i % 3])
    extra += [ADULT_PALETTE[(i * 5 + 1) % len(ADULT_PALETTE)], ADULT_RENDER[i % len(ADULT_RENDER)]]
    x = ", ".join(extra)
    people = ADULT_CAST + (" " + ROBI if "Robi" in scene else "")
    return f"{scene}. {x[0].upper() + x[1:]}. {people} {ADULT_STYLE} {TAIL} Aspect ratio {ratio}."


def build(i, scene, level, ratio, style=None, alt="", img=""):
    if level == "di-lam" or img == "cap-di-lam":
        return build_adult(i, scene, ratio)
    scene = scene.strip().rstrip(".")
    if style == "watercolor":
        return f"{scene}. Traditional watercolor illustration, soft paper texture. {TAIL} Aspect ratio {ratio}."
    # Rô-bi không cần xuất hiện ở mọi ảnh: ảnh lẻ bỏ vai phụ của Rô-bi (giữ khi Rô-bi là nhân vật chính)
    if i % 2 == 1 and not scene.startswith("Robi") and "Rô-bi" not in alt:
        scene = re.sub(r",\s*(and )?Robi\b[^,]*", "", scene)
    parts = [scene]
    extra = []
    if not re.search(CAM_WORDS, scene, re.I):
        extra.append(CAMERA[i % len(CAMERA)])
    if not re.search(LIGHT_WORDS, scene, re.I):
        pool = LIGHT_IN if re.search(INDOOR, scene, re.I) else LIGHT
        extra.append(pool[(i * 3) % len(pool)])
    extra += [PALETTE[(i * 5 + 2) % len(PALETTE)], RENDER[(i * 4 + 3) % len(RENDER)]]
    x = ", ".join(extra)
    parts.append(x[0].upper() + x[1:])
    people = CAST[level] + (" " + ROBI if "Robi" in scene else "")
    return ". ".join(parts) + f". {people} {STYLE} {TAIL} Aspect ratio {ratio}."


def from_lessons(files):
    js = ("global.window={};" + "".join(f"require({json.dumps(str(ROOT / f))});" for f in files) +
          "const o=[];window.AIEDU_LEVEL.lessons.forEach((l,i)=>l.s.forEach(s=>{if(s.img&&s.ep)o.push({b:i+1,img:s.img,alt:s.alt,ep:s.ep,style:s.style||null})}));"
          "console.log(JSON.stringify(o))")
    return json.loads(subprocess.check_output(["node", "-e", js]))


def from_thcs_csv():
    """THCS và trang chủ: cảnh nằm trong prompt-anh.csv cũ, cắt bỏ phần đuôi phong cách."""
    rows = []
    with open(DOCS / "prompt-anh.csv", encoding="utf-8-sig") as f:
        for r in csv.DictReader(f):
            scene = r["Prompt"].split(" Vibrant 3D")[0]
            scene = re.sub(r"Robi, a small round shiny orange robot mascot with big glowing navy eyes and (a )?tiny antenna", "Robi", scene)
            scene = re.sub(r"Vietnamese East Asian kids aged 12 to 1[45] with black hair, big heads, round faces and rosy cheeks, wearing white school shirts ?", "Vietnamese kids ", scene)
            rows.append({"img": r["Tên file"].rsplit(".", 1)[0], "alt": r["Mô tả (tiếng Việt)"], "ep": scene,
                         "ratio": r["Tỉ lệ"], "style": None})
    return rows


def write(level, items, csv_name, txt_name, with_lesson=True):
    lines, out = [], []
    for i, it in enumerate(items):
        p = build(i, it["ep"], level, it.get("ratio", "16:9"), it.get("style"), it.get("alt", ""), it["img"])
        lines.append(f"{it['img']}.jpg | {p}")
        out.append([i + 1] + ([it["b"]] if with_lesson else [it.get("ratio", "16:9")]) + [it["img"] + ".jpg", it["alt"], p])
    with open(DOCS / csv_name, "w", encoding="utf-8-sig", newline="") as f:
        w = csv.writer(f)
        w.writerow(["STT", "Buổi" if with_lesson else "Tỉ lệ", "Tên file", "Mô tả (tiếng Việt)", "Prompt"])
        w.writerows(out)
    (DOCS / txt_name).write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(level, len(items), "ảnh →", txt_name)


if __name__ == "__main__":
    write("tieu-hoc", from_lessons(["assets/js/lessons-tieu-hoc.js", "assets/js/lessons-tieu-hoc-2.js"]),
          "prompt-anh-tieu-hoc.csv", "prompt-anh-tieu-hoc-16x9.txt")
    write("thpt", from_lessons(["assets/js/lessons-thpt.js", "assets/js/lessons-thpt-2.js"]),
          "prompt-anh-thpt.csv", "prompt-anh-thpt-16x9.txt")
    write("di-lam", from_lessons(["assets/js/lessons-di-lam.js", "assets/js/lessons-di-lam-2.js"]),
          "prompt-anh-di-lam.csv", "prompt-anh-di-lam-16x9.txt")
    thcs = from_thcs_csv()
    home = [r for r in thcs if not r["img"].startswith("b")]
    lessons = [r for r in thcs if r["img"].startswith("b")]
    write("trang-chu", home, "prompt-anh-trang-chu.csv", "prompt-anh-trang-chu.txt", with_lesson=False)
    write("thcs", lessons, "prompt-anh-thcs.csv", "prompt-anh-thcs-16x9.txt", with_lesson=False)
