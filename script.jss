<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kapil Raghav | GenAI & Systems Engineer</title>
    <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
    
    <style>
        :root {
            --bg: #050505;
            --card-bg: rgba(20, 20, 20, 0.95);
            --accent: #00ffcc;
            --text-main: #ffffff;
            --text-dim: #9ca3af;
            --glass: rgba(255, 255, 255, 0.05);
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background-color: var(--bg); color: var(--text-main); font-family: 'Inter', sans-serif; overflow-x: hidden; scroll-behavior: smooth; }
        .container { max-width: 1300px; margin: 0 auto; padding: 0 5%; }

        /* Header - Centered Branding */
        nav { display: flex; flex-direction: column; align-items: center; padding: 40px 0; gap: 20px; border-bottom: 1px solid var(--glass); }
        .logo { font-family: 'Fira Code', monospace; font-weight: 700; color: var(--accent); font-size: 2.2rem; text-decoration: none; }

        /* Hero */
        .hero { text-align: center; padding: 60px 0; }
        .hero h1 { font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 800; line-height: 1.1; margin-bottom: 40px; }
        .hero h1 span { color: var(--accent); }

        /* Simultaneous Terminal Grid */
        .terminal-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(380px, 1fr)); gap: 25px; margin-top: 40px; }
        .terminal {
            background: #000; border-radius: 12px; padding: 25px; border: 1px solid #333;
            font-family: 'Fira Code', monospace; text-align: left; min-height: 380px;
            box-shadow: 0 15px 50px rgba(0, 255, 204, 0.08);
        }
        .terminal-header { display: flex; gap: 8px; margin-bottom: 20px; border-bottom: 1px solid #222; padding-bottom: 12px; }
        .dot { width: 10px; height: 10px; border-radius: 50%; }
        .red { background: #ff5f56; } .yellow { background: #ffbd2e; } .green { background: #27c93f; }
        .terminal-content { font-size: 0.88rem; line-height: 1.6; color: #d1d5db; }

        /* Impact Metrics - Trending Separated Section */
        .section-title { font-size: 2.8rem; text-align: center; margin: 100px 0 60px; font-weight: 800; }
        .section-title span { color: var(--accent); }

        .metrics-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
        .metric-card {
            background: var(--card-bg); padding: 50px 30px; border-radius: 24px; border: 1px solid var(--glass);
            text-align: center; transition: 0.4s; position: relative;
        }
        .metric-card:hover { transform: scale(1.05); border-color: var(--accent); }
        .metric-val { font-size: 3.5rem; font-weight: 800; color: var(--accent); display: block; margin-bottom: 15px; }
        .metric-label { font-size: 1.2rem; font-weight: 700; color: #fff; margin-bottom: 15px; display: block; }

        /* Architecture Section */
        .arch-card {
            background: var(--card-bg); border-radius: 24px; padding: 45px; margin-bottom: 30px;
            border: 1px solid var(--glass); border-left: 6px solid var(--accent);
        }
        .arch-card h3 { font-size: 1.8rem; margin-bottom: 25px; color: var(--accent); display: flex; align-items: center; gap: 15px; }

        /* Skills Cloud */
        .skills-grid { display: flex; flex-wrap: wrap; justify-content: center; gap: 15px; margin-top: 40px; }
        .skill-badge { background: var(--glass); padding: 10px 20px; border-radius: 50px; border: 1px solid var(--accent); font-weight: 600; color: var(--accent); }

        .btn { background: var(--accent); color: #000; padding: 14px 30px; border-radius: 10px; text-decoration: none; font-weight: 700; display: inline-flex; align-items: center; gap: 12px; margin-top: 20px; }
    </style>
</head>
<body>

    <nav>
        <a href="#" class="logo">kapil.raghav()</a>
        <div style="display: flex; gap: 15px;">
            <a href="Kapil_Raghav_Backend_Engineer.pdf" class="btn"><i class="fas fa-file-pdf"></i> View Resume</a>
        </div>
    </nav>

    <div class="container">
        <section class="hero">
            <h1>Backend & <br><span>GenAI Systems</span></h1>
            
            <div class="terminal-grid">
                <div class="terminal" data-aos="fade-up">
                    <div class="terminal-header">
                        <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
                        <span style="font-size:0.7rem; color:#666; margin-left:auto;">associate.sh</span>
                    </div>
                    <div class="terminal-content">
                        <code style="color:var(--accent)">$ fetch --experience --latest</code><br><br>
                        <span id="typed-current"></span>
                    </div>
                </div>

                <div class="terminal" data-aos="fade-up" data-aos-delay="50">
                    <div class="terminal-header">
                        <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
                        <span style="font-size:0.7rem; color:#666; margin-left:auto;">analyst.py</span>
                    </div>
                    <div class="terminal-content">
                        <code style="color:var(--accent)">$ cat previous_role.log</code><br><br>
                        <span id="typed-prev"></span>
                    </div>
                </div>

                <div class="terminal" data-aos="fade-up" data-aos-delay="100">
                    <div class="terminal-header">
                        <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
                        <span style="font-size:0.7rem; color:#666; margin-left:auto;">intern.bin</span>
                    </div>
                    <div class="terminal-content">
                        <code style="color:var(--accent)">$ run foundation.sh</code><br><br>
                        <span id="typed-origin"></span>
                    </div>
                </div>
            </div>
        </section>

        <section id="metrics">
            <h2 class="section-title">Impact <span>Metrics</span></h2>
            <div class="metrics-grid">
                <div class="metric-card" data-aos="zoom-in">
                    <span class="metric-val">80%</span>
                    <span class="metric-label">RAG Precision</span>
                    [span_1](start_span)<p style="color:var(--text-dim)">Increased from 40% via custom re-ranking for enterprise pharmaceutical SOPs[span_1](end_span).</p>
                </div>
                <div class="metric-card" data-aos="zoom-in" data-aos-delay="100">
                    <span class="metric-val">-30%</span>
                    <span class="metric-label">Manual Overhead</span>
                    [span_2](start_span)<p style="color:var(--text-dim)">Achieved through automation of Oracle reporting workflows using PL/SQL[span_2](end_span).</p>
                </div>
                <div class="metric-card" data-aos="zoom-in" data-aos-delay="200">
                    <span class="metric-val">100%</span>
                    <span class="metric-label">Data Freshness</span>
                    [span_3](start_span)<p style="color:var(--text-dim)">Guaranteed via multi-threaded delta-sync between SharePoint & AWS OpenSearch[span_3](end_span).</p>
                </div>
            </div>
        </section>

        <section id="architecture">
            <h2 class="section-title">Core <span>Architectures</span></h2>
            <div class="arch-card" data-aos="fade-right">
                <h3><i class="fas fa-project-diagram"></i> Enterprise RAG System</h3>
                [span_4](start_span)<p style="margin-bottom:20px;">Architected an End-to-End RAG using FastAPI and AWS Bedrock for 100k+ documents[span_4](end_span).</p>
                <div class="skills-grid" style="justify-content: flex-start;">
                    <span class="skill-badge">AWS Bedrock</span>
                    <span class="skill-badge">LangChain</span>
                    <span class="skill-badge">FastAPI</span>
                    <span class="skill-badge">OpenSearch</span>
                </div>
            </div>

            <div class="arch-card" data-aos="fade-left">
                <h3><i class="fas fa-server"></i> Hospital Management Backend</h3>
                [span_5](start_span)<p style="margin-bottom:20px;">Developed a scalable hospital management backend implementing CRUD operations and relational modeling[span_5](end_span).</p>
                <div class="skills-grid" style="justify-content: flex-start;">
                    <span class="skill-badge">Python</span>
                    <span class="skill-badge">FastAPI</span>
                    <span class="skill-badge">SQLite</span>
                    <span class="skill-badge">REST APIs</span>
                </div>
            </div>
        </section>
    </div>

    <footer style="padding: 80px 0; text-align: center; border-top: 1px solid var(--glass);">
        <div style="margin-bottom: 30px;">
            <a href="https://linkedin.com/in/kapil-raghav" style="color:var(--accent); margin:0 20px; text-decoration:none; font-weight:700;">LINKEDIN</a>
            <a href="https://github.com/Raghav-2801" style="color:var(--accent); margin:0 20px; text-decoration:none; font-weight:700;">GITHUB</a>
        </div>
        <p style="color: var(--text-dim); font-size: 0.8rem;">© 2026 Kapil Raghav • GenAI Systems Engineer • Noida, India</p>
    </footer>

    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
        AOS.init({ duration: 1000, once: true });

        // SIMULTANEOUS TYPING (All start together)
        new Typed('#typed-current', {
            [span_6](start_span)strings: ["<span style='color:#fff; font-weight:bold;'>Associate (Aug 2023 - Present)</span>[span_6](end_span)[span_7](start_span)<br><br>→ Architected RAG with AWS Bedrock[span_7](end_span)[span_8](start_span)<br>→ Built 2-Stage Retrieval (Claude 3)[span_8](end_span)[span_9](start_span)<br>→ Multi-threaded SharePoint Sync[span_9](end_span)[span_10](start_span)<br>→ Implemented LLM Guardrails[span_10](end_span)"],
            typeSpeed: 15, showCursor: false, contentType: 'html'
        });

        new Typed('#typed-prev', {
            [span_11](start_span)strings: ["<span style='color:#fff; font-weight:bold;'>Programmer Analyst (2022 - 2023)</span>[span_11](end_span)[span_12](start_span)<br><br>→ Automated Oracle Workflows[span_12](end_span)[span_13](start_span)<br>→ Reduced manual overhead by 30%[span_13](end_span)[span_14](start_span)<br>→ 15% Latency reduction in SQL[span_14](end_span)[span_15](start_span)<br>→ Technical Training Lead[span_15](end_span)"],
            typeSpeed: 15, showCursor: false, contentType: 'html'
        });

        new Typed('#typed-origin', {
            [span_16](start_span)strings: ["<span style='color:#fff; font-weight:bold;'>Analyst Trainee (Mar 2022 - Oct 2022)</span>[span_16](end_span)[span_17](start_span)<br><br>→ Hospital Management Backend[span_17](end_span)[span_18](start_span)<br>→ FastAPI & Relational Modeling[span_18](end_span)[span_19](start_span)<br>→ Standardized RESTful APIs[span_19](end_span)[span_20](start_span)<br>→ Python Backend Fundamentals[span_20](end_span)"],
            typeSpeed: 15, showCursor: false, contentType: 'html'
        });
    </script>
</body>
</html>
