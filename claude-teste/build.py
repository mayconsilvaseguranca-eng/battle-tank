"""Monta a versão de teste do Claude a partir do index.html do site.

Uso:  python3 claude-teste/build.py SAIDA.html

O jogo é o mesmo arquivo. Só muda o bloco entre "/* @net:begin" e "/* @net:end */":
no site ele usa PeerJS (WebRTC); no Claude usa as salas do próprio Claude (net-room.js),
porque o Claude bloqueia WebRTC. O resto do arquivo é copiado igual.
"""
import pathlib
import re
import sys

here = pathlib.Path(__file__).resolve().parent
src = (here.parent / "index.html").read_text(encoding="utf-8")
net = (here / "net-room.js").read_text(encoding="utf-8").strip()

a = src.index("/* @net:begin")
b = src.index("/* @net:end */") + len("/* @net:end */")
out = src[:a] + net + src[b:]

# o artefato do Claude já vem com <!doctype>, <html>, <head>, <body> e charset/viewport
for tag in ["<!doctype html>", '<html lang="pt-BR">', "<head>", "</head>", "<body>", "</body>", "</html>",
            '<meta charset="utf-8">',
            '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">']:
    out = out.replace(tag, "", 1)
out = re.sub(r'<script src="https://unpkg\.com/peerjs@[^"]+"></script>\n?', "", out)
out = out.replace("html{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px);box-sizing:border-box}\n", "", 1)
out = out.replace("<title>Batalha de Tanques</title>",
                  '<title>Batalha de Tanques</title>\n<meta name="claude:viewport-fit-sides" content="cover">', 1)
out = out.replace('<h1 class="logo">BATALHA DE <br>TANQUES</h1>',
                  '<h1 class="logo">BATALHA DE <br>TANQUES</h1>\n      <div class="sub" style="color:var(--red)">VERSÃO DE TESTE</div>', 1)
out = out.lstrip()

dest = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else "teste.html")
dest.write_text(out, encoding="utf-8")
print("ok:", dest, len(out), "bytes")
