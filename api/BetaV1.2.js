export default async function handler(req, res) {
  const userAgent = req.headers['user-agent'] || '';

  if (userAgent.includes('Roblox')) {
    const githubRawUrl = "https://raw.githubusercontent.com/narakuhub/plugin/refs/heads/main/KonfigurasiPlaceID.lua";
    try {
      const response = await fetch(githubRawUrl);
      if (!response.ok) throw new Error('Gagal mengambil script');
      const luaScript = await response.text();
      res.setHeader('Content-Type', 'text/plain');
      return res.status(200).send(luaScript);
    } catch (error) {
      res.setHeader('Content-Type', 'text/plain');
      return res.status(500).send("-- Error: Gagal memuat script.");
    }
  } else {

    res.setHeader('Content-Type', 'text/html');
    const htmlResponse = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NARAKU PLUGIN</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        body { background: #050505; color: white; font-family: 'Inter', sans-serif; overflow: hidden; }
        canvas { position: fixed; top: 0; left: 0; z-index: -1; }
        .main-card { background: #0e0e0e; border: 1px solid #222; border-radius: 16px; width: 100%; max-width: 600px; box-shadow: 0 0 20px rgba(0,0,0,0.5); }
        .code-box { background: #000; border: 1px solid #222; overflow-x: auto; white-space: nowrap; }
        .stat-card { background: #161616; border: 1px solid #222; }
        .btn-gradient { background: linear-gradient(90deg, #2563eb, #3b82f6); transition: 0.3s; }
        .btn-gradient:hover { filter: brightness(1.2); }
    </style>
</head>
<body class="flex flex-col items-center justify-center min-h-screen p-4">
    <canvas id="matrix"></canvas>
    <div class="text-center mb-8">
        <h1 class="text-3xl font-bold mb-2">NARAKU PLUGIN</h1>
        <p class="text-gray-400 text-sm">Official Free Script Plugin Studio Lite</p>
    </div>
    <div class="main-card p-6">
        <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-2">
                <span class="text-blue-500 font-bold">_></span>
                <h2 class="font-bold">Loadstring Script</h2>
            </div>
            <span class="bg-green-900/20 text-green-500 text-[10px] px-2 py-1 rounded border border-green-800/50 flex items-center gap-1 uppercase font-bold">
                <i class="fa-solid fa-circle-check text-[8px]"></i> Verified
            </span>
        </div>
        <div class="code-box rounded-lg p-4 mb-4 relative">
            <div class="flex justify-between text-[10px] text-gray-500 mb-2 uppercase">
                <span>Lua</span>
                <button onclick="copyScript(this)" class="hover:text-white transition"><i class="fa-regular fa-copy"></i> Copy</button>
            </div>
            <code id="scriptText" class="text-xs text-blue-300">
                -- SALIN SCRIPT LOADSTRING <br>
                -- EXECUTE DISTUDIO LITE <br>
                loadstring(game:HttpGet("https://plugin-studio-lite-nx.vercel.app/api/BetaV1.2"))()
            </code>
        </div>
        <div class="grid grid-cols-3 gap-2 mb-4">
            <div class="stat-card p-3 rounded-lg"><p class="text-[9px] text-gray-500 uppercase">Status</p><p class="text-green-500 text-xs font-bold">Online</p></div>
            <div class="stat-card p-3 rounded-lg"><p class="text-[9px] text-gray-500 uppercase">Version</p><p class="text-white text-xs font-bold">v2.3</p></div>
            <div class="stat-card p-3 rounded-lg"><p class="text-[9px] text-gray-500 uppercase">Type</p><p class="text-blue-400 text-xs font-bold">Lua</p></div>
            <div class="stat-card p-3 rounded-lg"><p class="text-[9px] text-gray-500 uppercase">Host</p><p class="text-white text-xs font-bold">Vercel</p></div>
            <div class="stat-card p-3 rounded-lg"><p class="text-[9px] text-gray-500 uppercase">Proxy</p><p class="text-white text-xs font-bold">GitHub</p></div>
            <div class="stat-card p-3 rounded-lg"><p class="text-[9px] text-gray-500 uppercase">Access</p><p class="text-red-400 text-xs font-bold">Roblox</p></div>
        </div>
        <div class="bg-[#161616] p-4 rounded-lg mb-6 border border-[#222]">
            <h3 class="text-xs font-bold mb-3">FITURE PLUGIN</h3>
            <div class="space-y-2 text-[11px] text-gray-400">
                <div class="flex items-center gap-2"><i class="fa-solid fa-check text-green-500"></i> TOOLBOX LIBRARY</div>
                <div class="flex items-center gap-2"><i class="fa-solid fa-check text-green-500"></i> ARCHIMEDES</div>
                <div class="flex items-center gap-2"><i class="fa-solid fa-check text-green-500"></i> TERRAIN</div>
                <div class="flex items-center gap-2"><i class="fa-solid fa-check text-green-500"></i> FLY GUI V3</div>
                <div class="flex items-center gap-2"><i class="fa-solid fa-check text-green-500"></i> MAANFAATKAN FITUR YANG ADA</div>
            </div>
        </div>
        <div class="flex gap-2">
            <button onclick="copyScript(this)" class="flex-1 btn-gradient text-white py-2 rounded font-bold text-sm transition flex items-center justify-center gap-2">
                <i class="fa-regular fa-copy"></i> Copy Loadstring
            </button>
            <a href="https://discord.gg/U4qe4r9hs" target="_blank" class="px-4 py-2 bg-[#222] hover:bg-[#333] rounded text-sm transition flex items-center gap-2">
                <i class="fa-brands fa-discord"></i> Join
            </a>
            <a href="#" class="px-4 py-2 bg-[#222] hover:bg-[#333] rounded text-sm transition"><i class="fa-brands fa-github"></i></a>
        </div>
    </div>
    <script>
        function copyScript(btn) {
            const text = 'loadstring(game:HttpGet("https://plugin-studio-lite-nx.vercel.app/api/BetaV1.2"))()';
            navigator.clipboard.writeText(text);
            const originalIcon = btn.innerHTML;
            btn.innerHTML = '<i class="fa-solid fa-check"></i>';
            setTimeout(() => { btn.innerHTML = originalIcon; }, 2000);
        }
        const canvas = document.getElementById('matrix');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const letters = "01LuaScriptNaraku10101";
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops = Array(Math.floor(columns)).fill(1);
        function draw() {
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#0F0";
            ctx.font = fontSize + "px monospace";
            for(let i = 0; i < drops.length; i++) {
                const text = letters[Math.floor(Math.random() * letters.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                if(drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
                drops[i]++;
            }
        }
        setInterval(draw, 33);
    </script>
</body>
</html>`;

    return res.status(200).send(htmlResponse);
  }
}
