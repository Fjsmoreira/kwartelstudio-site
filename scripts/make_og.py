from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
PAPER = (243, 244, 239)
RAISED = (251, 251, 247)
INK = (18, 23, 26)
INK2 = (60, 70, 67)
INK3 = (107, 117, 112)
GREEN = (20, 52, 43)
MARK = (242, 194, 48)
LINE = (205, 210, 198)
LINE2 = (168, 176, 162)

ARCHIVO = "/tmp/Archivo.ttf"
INSTRUMENT = "/tmp/InstrumentSans.ttf"


def archivo(size, weight="ExtraBold"):
    f = ImageFont.truetype(ARCHIVO, size)
    f.set_variation_by_name(weight)
    return f


def instrument(size, weight="Regular"):
    f = ImageFont.truetype(INSTRUMENT, size)
    f.set_variation_by_name(weight)
    return f


def spaced(text, gap=" "):
    return gap.join(list(text))


def draw_spaced(d, pos, text, font, fill, gap=3):
    x, y = pos
    for ch in text:
        d.text((x, y), ch, font=font, fill=fill)
        x += d.textlength(ch, font=font) + gap


img = Image.new("RGB", (W, H), PAPER)
d = ImageDraw.Draw(img)

# subtiel raster links (werkplaats/drawing paper)
for x in range(0, W, 40):
    d.line([(x, 0), (x, H)], fill=(236, 238, 231), width=1)

# eyebrow
draw_spaced(d, (72, 68), "AI-STUDIO  ·  LAREN  ·  HET GOOI", instrument(15, "SemiBold"), INK3, gap=2.0)
d.line([(72, 104), (128, 104)], fill=LINE2, width=2)

# headline
head = archivo(74)
lines = ["AI voor bedrijven", "die geen", "AI-bedrijf zijn."]
y = 140
for ln in lines:
    d.text((72, y), ln, font=head, fill=INK)
    y += 78

# marker underline onder "AI-bedrijf zijn."
w_last = d.textlength(lines[-1], font=head)
d.rectangle([74, y - 70, 74 + w_last, y - 58], fill=MARK)
# herteken tekst boven de markering
d.text((72, y - 78), lines[-1], font=head, fill=INK)

# subline
sub = instrument(25)
d.text((72, 420), "Eén proces geautomatiseerd. Vaste prijs.", font=sub, fill=INK2)
d.text((72, 455), "Live in vier tot acht weken.", font=sub, fill=INK2)

# ---------- werkbon rechts ----------
bx0, by0, bx1, by1 = 792, 120, 1128, 500
d.rectangle([bx0 + 6, by0 + 8, bx1 + 6, by1 + 8], fill=(232, 234, 226))
d.rectangle([bx0, by0, bx1, by1], fill=RAISED, outline=LINE2, width=2)

# perforatie
py = by0 + 34
x = bx0 + 8
while x < bx1 - 8:
    d.line([(x, py), (x + 7, py)], fill=LINE2, width=2)
    x += 14
d.ellipse([bx0 - 6, py - 6, bx0 + 6, py + 6], fill=PAPER, outline=LINE2, width=2)
d.ellipse([bx1 - 6, py - 6, bx1 + 6, py + 6], fill=PAPER, outline=LINE2, width=2)

mono = instrument(14, "SemiBold")
draw_spaced(d, (bx0 + 22, by0 + 12), "KW-2401", mono, GREEN, gap=1.5)
draw_spaced(d, (bx1 - 118, by0 + 12), "WERKBON", mono, INK3, gap=1.5)

title = archivo(27, "Bold")
d.text((bx0 + 22, by0 + 62), "Intake-assistent", font=title, fill=INK)
d.text((bx0 + 22, by0 + 96), "voor een praktijk", font=title, fill=INK)

# specs
specs = [("VOOR WIE", "praktijk, 3 stoelen"), ("DOORLOOPTIJD", "4 weken"), ("INVESTERING", "€ 4.950 vast")]
sy = by0 + 160
for label, val in specs:
    d.line([(bx0 + 22, sy), (bx1 - 22, sy)], fill=LINE, width=1)
    draw_spaced(d, (bx0 + 22, sy + 10), label, instrument(12, "SemiBold"), INK3, gap=1.2)
    d.text((bx0 + 22, sy + 30), val, font=instrument(19, "Medium"), fill=INK)
    sy += 74

# stempel
d.rectangle([bx1 - 146, by1 - 62, bx1 - 24, by1 - 28], fill=(247, 226, 160), outline=GREEN, width=2)
draw_spaced(d, (bx1 - 136, by1 - 52), "VASTE PRIJS", instrument(12, "Bold"), GREEN, gap=1.2)

# ---------- footer band ----------
d.rectangle([0, 528, W, H], fill=GREEN)
d.rectangle([0, 528, W, 532], fill=MARK)

d.rectangle([72, 560, 102, 590], fill=(243, 244, 239))
d.text((82, 566), "K", font=archivo(22, "Bold"), fill=GREEN)
d.ellipse([96, 558, 104, 566], fill=MARK)

d.text((120, 562), "Kwartel Studio", font=archivo(28, "Bold"), fill=(243, 244, 239))
d.text((120, 596), "AI-implementatie en apps voor het mkb", font=instrument(16), fill=(184, 200, 190))

draw_spaced(d, (W - 300, 570), "KWARTELSTUDIO.NL", instrument(16, "SemiBold"), (243, 244, 239), gap=1.8)
draw_spaced(d, (W - 300, 596), "+31 6 31683221", instrument(14), (184, 200, 190), gap=1.2)

img.save("/home/kukunest/repos/kwartelstudio-site/public/og.png", optimize=True)

# apple touch icon
icon = Image.new("RGB", (180, 180), GREEN)
di = ImageDraw.Draw(icon)
kfont = archivo(108, "ExtraBold")
kw = di.textlength("K", font=kfont)
di.text(((180 - kw) / 2, 20), "K", font=kfont, fill=(243, 244, 239))
di.ellipse([123, 20, 152, 49], fill=MARK)
icon.save("/home/kukunest/repos/kwartelstudio-site/public/apple-touch-icon.png", optimize=True)
print("ok")
