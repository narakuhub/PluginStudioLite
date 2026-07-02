export default async function handler(req, res) {
  // Mengambil User-Agent untuk mendeteksi pengakses
  const userAgent = req.headers['user-agent'] || '';

  // Mengecek apakah pengakses adalah Roblox Game Server
  if (userAgent.includes('Roblox')) {
    
    // Link RAW GitHub kamu
    const githubRawUrl = "https://raw.githubusercontent.com/narakublox/PluginStudioLite/refs/heads/main/LOG-PLUGIN";

    try {
      // Vercel mengambil isi script dari GitHub di balik layar
      const response = await fetch(githubRawUrl);
      
      if (!response.ok) {
        throw new Error('Gagal mengambil script');
      }

      const luaScript = await response.text();

      // Kirim isi script ke Roblox sebagai teks biasa
      res.setHeader('Content-Type', 'text/plain');
      return res.status(200).send(luaScript);

    } catch (error) {
      res.setHeader('Content-Type', 'text/plain');
      return res.status(500).send("-- Error: Gagal memuat script dari server pusat.");
    }

  } else {
    // JIKA DIBUKA DI BROWSER, TAMPILKAN WEB NEON PANEL + EFFECT + ANIMASI FLIP:
    res.setHeader('Content-Type', 'text/html');
    
    const htmlResponse = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Access Denied - Naraku Blox</title>
        <style>
            * { box-sizing: border-box; margin: 0; padding: 0; }
            body {
                background-image: url('https://files.catbox.moe/gfmzjj.png');
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                height: 100vh;
                font-family: 'Segoe UI', Arial, sans-serif;
                display: flex;
                justify-content: center;
                align-items: center;
                overflow: hidden;
                backdrop-filter: blur(5px);
            }
            .panel {
                background-color: rgba(10, 10, 12, 0.9);
                border: 2px solid #ff4d4d;
                border-radius: 16px;
                padding: 45px 35px;
                text-align: center;
                box-shadow: 0 0 20px #ff4d4d, inset 0 0 10px rgba(255, 77, 77, 0.5), 0 10px 30px rgba(0,0,0,0.8);
                max-width: 420px;
                width: 90%;
                position: relative;
                overflow: hidden;
                perspective: 1000px; /* Penting untuk efek 3D */
                animation: scaleUp 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            }
            .panel::before {
                content: '';
                position: absolute;
                top: -50%;
                left: -60%;
                width: 30%;
                height: 200%;
                background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0) 100%);
                transform: rotate(25deg);
                animation: shine 3s infinite ease-in-out;
            }
            .icon { font-size: 55px; margin-bottom: 10px; display: inline-block; animation: bounce 2s infinite ease-in-out; }
            
            /* Animasi Flip 3D untuk NOT FOUND */
            h1 {
                color: #ff4d4d;
                font-family: 'Impact', 'Arial Black', sans-serif;
                font-size: 38px;
                letter-spacing: 3px;
                margin-bottom: 5px;
                text-shadow: 0 0 15px rgba(255, 77, 77, 0.6);
                transform-style: preserve-3d;
                animation: flipRotation 4s infinite ease-in-out;
            }
            
            .sub-title {
                color: #ffffff;
                font-size: 19px;
                font-weight: 700;
                letter-spacing: 2px;
                margin-bottom: 30px;
                text-shadow: 0 0 8px rgba(255,255,255,0.3);
            }
            .discord-btn {
                background-color: #111111;
                color: #ffffff;
                text-decoration: none;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 12px;
                padding: 13px 20px;
                border-radius: 10px;
                font-weight: 700;
                font-size: 15px;
                border: 1px solid rgba(255, 255, 255, 0.1);
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6);
                transition: all 0.2s ease-in-out;
            }
            .discord-btn:hover {
                background-color: #000000;
                border-color: #ff4d4d;
                box-shadow: 0 0 12px rgba(255, 77, 77, 0.4);
                transform: translateY(-2px);
            }
            .discord-icon { width: 26px; height: 26px; border-radius: 6px; object-fit: cover; }

            @keyframes scaleUp { from { opacity: 0; transform: scale(0.85); } to { opacity: 1; transform: scale(1); } }
            @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
            @keyframes shine { 0% { left: -70%; } 30%, 100% { left: 150%; } }
            
            /* Animasi Flip 3D */
            @keyframes flipRotation {
                0% { transform: rotateY(0deg); }
                40% { transform: rotateY(180deg); }
                60% { transform: rotateY(180deg); }
                100% { transform: rotateY(360deg); }
            }
        </style>
    </head>
    <body>
        <div class="panel">
            <div class="icon">⚠️</div>
            <h1>NOT FOUND</h1>
            <div class="sub-title">NARAKU BLOX</div>
            <a href="https://discord.gg/cNeXhY235" target="_blank" class="discord-btn">
                <img src="https://files.catbox.moe/w2ds4l.jpg" alt="Discord Icon" class="discord-icon">
                JOIN DISCORD
            </a>
        </div>
    </body>
    </html>
    `;
    
    return res.status(403).send(htmlResponse);
  }
}
