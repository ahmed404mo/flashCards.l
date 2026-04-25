 // --- Data for the Flashcards ---
        // تم تعديل النصوص باللهجة المصرية وإضافة روابط الصوت
        const cardsData = [
            {
                title: "إعادة التدوير",
                question: "نودي الحاجات القديمة فين؟",
                answer: "في صناديق إعادة التدوير عشان نعمل منها حاجات جديدة ومفيدة!",
                frontImage: "https://i.pinimg.com/1200x/f6/36/85/f63685007101ce4c0221777cc4d90c75.jpg",
                questionAudio: "https://res.cloudinary.com/dtuxyc0ti/video/upload/v1776875449/ElevenLabs_2026-04-22T16_30_22_Sara_-_Soft_Calm_and_Gentle_pvc_sp100_s50_sb56_se0_b_m2_1_sjoejl.mp3",
                answerAudio: "https://res.cloudinary.com/dtuxyc0ti/video/upload/v1776875489/ElevenLabs_2026-04-22T16_31_14_Sara_-_Soft_Calm_and_Gentle_pvc_sp100_s50_sb56_se0_b_m2_rc61ny.mp3"
            },
            {
                title: "نقطة مياه",
                question: "إزاي نحافظ على الماية؟",
                answer: "نقفل الحنفية كويس وإحنا بنغسل سنانا كل يوم الصبح!",
                frontImage: "https://i.pinimg.com/1200x/bd/54/fd/bd54fd68fa7f8a5bf5cd6b19e3ca7f2f.jpg",
                questionAudio: "https://res.cloudinary.com/dtuxyc0ti/video/upload/v1776875557/ElevenLabs_2026-04-22T16_32_25_Sara_-_Soft_Calm_and_Gentle_pvc_sp100_s50_sb56_se0_b_m2_qefigu.mp3",
                answerAudio: "https://res.cloudinary.com/dtuxyc0ti/video/upload/v1776875632/ElevenLabs_2026-04-22T16_33_41_Sara_-_Soft_Calm_and_Gentle_pvc_sp100_s50_sb56_se0_b_m2_pelceu.mp3"
            },
            {
                title: "صاحب الشجر",
                question: "ليه بنزرع شجر؟",
                answer: "عشان بتنضف الهوا وبتعمل بيوت حلوة للعصافير!",
                frontImage: "https://i.pinimg.com/736x/5b/9a/3a/5b9a3a778805b68e470a29da69b77bfe.jpg",
                questionAudio: "https://res.cloudinary.com/dtuxyc0ti/video/upload/v1776875674/ElevenLabs_2026-04-22T16_34_23_Sara_-_Soft_Calm_and_Gentle_pvc_sp100_s50_sb56_se0_b_m2_cv0ryw.mp3",
                answerAudio: "https://res.cloudinary.com/dtuxyc0ti/video/upload/v1776875810/ElevenLabs_2026-04-22T16_36_38_Sara_-_Soft_Calm_and_Gentle_pvc_sp100_s50_sb56_se0_b_m2_pia3ct.mp3"
            },
            {
                title: "توفير الكهربا",
                question: "إزاي نوفر في الكهربا؟",
                answer: "نطفي النور والأجهزة لما نخرج من الأوضة!",
                frontImage: "https://i.pinimg.com/1200x/91/a6/8f/91a68f7b300f888d18135ae8691baa82.jpg",
                questionAudio: "https://res.cloudinary.com/dtuxyc0ti/video/upload/v1776875853/ElevenLabs_2026-04-22T16_37_21_Sara_-_Soft_Calm_and_Gentle_pvc_sp100_s50_sb56_se0_b_m2_jxzn75.mp3",
                answerAudio: "https://res.cloudinary.com/dtuxyc0ti/video/upload/v1776875890/ElevenLabs_2026-04-22T16_37_58_Sara_-_Soft_Calm_and_Gentle_pvc_sp100_s50_sb56_se0_b_m2_kwmt7m.mp3"
            },
            {
                title: "أكياس القماش",
                question: "نستخدم إيه وإحنا بنشتري طلبات؟",
                answer: "نستخدم أكياس القماش اللي بتتغسل بدل الأكياس البلاستيك!",
                frontImage: "https://i.pinimg.com/1200x/12/9b/37/129b3783fa10cbbb9f50c2ba79ee72fc.jpg",
                questionAudio: "https://res.cloudinary.com/dtuxyc0ti/video/upload/v1776875931/ElevenLabs_2026-04-22T16_38_41_Sara_-_Soft_Calm_and_Gentle_pvc_sp100_s50_sb56_se0_b_m2_fx5hq5.mp3",
                answerAudio: "https://res.cloudinary.com/dtuxyc0ti/video/upload/v1776876054/ElevenLabs_2026-04-22T16_40_38_Sara_-_Soft_Calm_and_Gentle_pvc_sp100_s50_sb56_se0_b_m2_egue8f.mp3"
            },
            {
                title: "حماية البحر",
                question: "نرمي الزبالة فين وإحنا على البحر؟",
                answer: "في الباسكت عشان نحمي السمك والسلاحف من الخطر!",
                frontImage: "https://i.pinimg.com/736x/6d/54/51/6d545104715856ee090f95656cbeb1bc.jpg",
                questionAudio: "https://res.cloudinary.com/dtuxyc0ti/video/upload/v1776876130/ElevenLabs_2026-04-22T16_41_59_Sara_-_Soft_Calm_and_Gentle_pvc_sp100_s50_sb56_se0_b_m2_rqxqxm.mp3",
                answerAudio: "https://res.cloudinary.com/dtuxyc0ti/video/upload/v1776876210/ElevenLabs_2026-04-22T16_42_44_Sara_-_Soft_Calm_and_Gentle_pvc_sp100_s50_sb56_se0_b_m2_gopj4a.mp3"
            }
        ];

        // --- Three.js Variables ---
        let scene, camera, renderer, cardMesh;
        let cardTextures = []; // سيحتفظ بصور البطاقات لسرعة التبديل
        let currentIndex = 0;
        let isFlipped = false;
        let isAnimating = false;
        let currentAudio = null; // متغير لحفظ وإدارة الصوت الحالي

        // دالة تشغيل الصوت بحيث لا تتداخل الأصوات مع بعضها
        function playAudio(url) {
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }
            if (url) {
                currentAudio = new Audio(url);
                // منع ظهور خطأ في المتصفح في حال كان الإعداد يمنع التشغيل التلقائي
                currentAudio.play().catch(e => console.log("في انتظار تفاعل المستخدم لتشغيل الصوت", e));
            }
        }

        // دالة الزر لإعادة تشغيل الصوت
        function replayAudio(event) {
            event.stopPropagation(); // عشان الكارت ميتلفش لما ندوس على زرار الصوت
            const card = cardsData[currentIndex];
            if (isFlipped) {
                playAudio(card.answerAudio);
            } else {
                playAudio(card.questionAudio);
            }
        }

        // دالة مساعدة لمحاكاة (Object-Fit: Cover) داخل الـ Canvas
        function drawImageCover(ctx, img, x, y, w, h) {
            const iw = img.width, ih = img.height;
            const r = Math.max(w / iw, h / ih);
            const nw = iw * r, nh = ih * r;
            const cx = (iw - w / r) / 2;
            const cy = (ih - h / r) / 2;
            ctx.drawImage(img, cx, cy, iw - cx * 2, ih - cy * 2, x, y, w, h);
        }

        // دالة لتقسيم النصوص الطويلة إلى أسطر في الـ Canvas
        function wrapText(context, text, x, y, maxWidth, lineHeight) {
            const words = text.split(' ');
            let line = '';
            let lineY = y;
            
            // بما أننا نكتب عربي من اليمين لليسار
            for(let n = 0; n < words.length; n++) {
                let testLine = line + words[n] + ' ';
                let metrics = context.measureText(testLine);
                let testWidth = metrics.width;
                if (testWidth > maxWidth && n > 0) {
                    context.fillText(line, x, lineY);
                    line = words[n] + ' ';
                    lineY += lineHeight;
                } else {
                    line = testLine;
                }
            }
            context.fillText(line, x, lineY);
        }

        // إنشاء الصورة الأمامية للبطاقة
        function createFrontTexture(card) {
            return new Promise((resolve) => {
                const canvas = document.createElement('canvas');
                canvas.width = 800;
                canvas.height = 1200;
                const ctx = canvas.getContext('2d');
                ctx.direction = 'rtl'; // لدعم اللغة العربية

                const renderContent = (imageObject) => {
                    // 1. رسم الصورة على كامل مساحة الكارد
                    if (imageObject) {
                        drawImageCover(ctx, imageObject, 0, 0, 800, 1200);
                    } else {
                        // لون بديل في حال فشل تحميل الصورة
                        ctx.fillStyle = '#e0f2fe';
                        ctx.fillRect(0, 0, 800, 1200);
                    }

                    // 2. الجزء السفلي (مساحة بيضاء للنص)
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
                    ctx.fillRect(0, 800, 800, 400); // 400 بكسل في الأسفل

                    // 3. خط زينة أعلى المساحة البيضاء
                    ctx.fillStyle = '#14b8a6'; // لون تيل (Teal)
                    ctx.fillRect(0, 800, 800, 15);

                    // 4. العنوان
                    ctx.fillStyle = '#115e59'; // لون أخضر غامق
                    ctx.font = 'bold 65px Cairo, sans-serif';
                    ctx.textAlign = 'center';
                    ctx.fillText(card.title, 400, 910);

                    // 5. السؤال
                    ctx.fillStyle = '#374151'; // رمادي
                    ctx.font = 'bold 45px Cairo, sans-serif';
                    wrapText(ctx, card.question, 400, 1000, 720, 60);

                    const texture = new THREE.CanvasTexture(canvas);
                    texture.anisotropy = renderer ? renderer.capabilities.getMaxAnisotropy() : 1;
                    resolve(texture);
                };

                const img = new Image();
                img.crossOrigin = "Anonymous"; 
                // استخدام خدمة wsrv.nl المتخصصة للصور لتجاوز حماية المتصفح (CORS) بنجاح
                img.src = "https://wsrv.nl/?url=" + encodeURIComponent(card.frontImage);
                
                img.onload = () => renderContent(img);
                img.onerror = () => {
                    console.error("خطأ في تحميل الصورة:", card.frontImage);
                    renderContent(null); // إذا فشلت الصورة لسبب ما، يعرض التصميم بدونها كي لا يتوقف التطبيق
                };
            });
        }

        // إنشاء الصورة الخلفية (الجواب) للبطاقة
        function createBackTexture(card) {
            const canvas = document.createElement('canvas');
            canvas.width = 800;
            canvas.height = 1200;
            const ctx = canvas.getContext('2d');
            ctx.direction = 'rtl';

            // خلفية ملونة متدرجة
            const gradient = ctx.createLinearGradient(0, 0, 800, 1200);
            gradient.addColorStop(0, '#2dd4bf'); // teal-400
            gradient.addColorStop(1, '#059669'); // emerald-600
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, 800, 1200);

            // إطار داخلي أبيض
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 15;
            ctx.strokeRect(40, 40, 720, 1120);

            // كتابة كلمة "الإجابة!"
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 90px Cairo, sans-serif';
            ctx.textAlign = 'center';
            
            // ظل للنص
            ctx.shadowColor = 'rgba(0,0,0,0.3)';
            ctx.shadowBlur = 10;
            ctx.shadowOffsetX = 3;
            ctx.shadowOffsetY = 5;
            ctx.fillText('الإجابة!', 400, 350);

            // كتابة الجواب الفعلي
            ctx.font = 'bold 55px Cairo, sans-serif';
            ctx.shadowBlur = 0;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            wrapText(ctx, card.answer, 400, 550, 650, 80);

            const texture = new THREE.CanvasTexture(canvas);
            texture.anisotropy = renderer ? renderer.capabilities.getMaxAnisotropy() : 1;
            return texture;
        }

        // إنشاء المشهد ثلاثي الأبعاد
        async function initThree() {
            const container = document.getElementById('canvasContainer');
            const width = container.clientWidth;
            const height = container.clientHeight;

            // 1. تهيئة المشهد والكاميرا
            scene = new THREE.Scene();
            // تقليل زاوية الرؤية (FOV) لتقليل إظهار الحواف الجانبية بشكل مزعج
            camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 100);
            camera.position.z = 16; // إبعاد الكاميرا قليلاً لتعويض تقليل الزاوية

            // 2. الريندر (مع دعم الشفافية لخلفية الموقع)
            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(width, height);
            renderer.setPixelRatio(window.devicePixelRatio);
            // تفعيل الظلال ثلاثية الأبعاد الحقيقية بدلاً من ظل الويب الثابت
            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = THREE.PCFSoftShadowMap;
            container.appendChild(renderer.domElement);

            // 3. الإضاءة
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.85); // إضاءة عامة
            scene.add(ambientLight);
            
            const directionalLight = new THREE.DirectionalLight(0xffffff, 0.4);
            // تعديل مكان الإضاءة لتكون أقرب للمنتصف وأكثر طبيعية
            directionalLight.position.set(1, 3, 10);
            directionalLight.castShadow = true; // تفعيل الظل للإضاءة
            directionalLight.shadow.mapSize.width = 2048; // دقة أعلى للظل
            directionalLight.shadow.mapSize.height = 2048;
            directionalLight.shadow.radius = 5; // جعل حواف الظل ناعمة جداً
            scene.add(directionalLight);

            // مستوى خلفي شفاف لاستقبال الظل وإعطاء عمق حقيقي للبطاقة
            const shadowPlaneGeo = new THREE.PlaneGeometry(50, 50);
            const shadowPlaneMat = new THREE.ShadowMaterial({ opacity: 0.12 }); // تقليل حدة الظل
            const shadowPlane = new THREE.Mesh(shadowPlaneGeo, shadowPlaneMat);
            // تقريب الظل للبطاقة حتى لا يبدو منفصلاً (كان -2 وأصبح -0.5)
            shadowPlane.position.z = -0.5;
            shadowPlane.receiveShadow = true;
            scene.add(shadowPlane);

            // 4. تجهيز جميع الصور مسبقاً
            for (let i = 0; i < cardsData.length; i++) {
                const frontTex = await createFrontTexture(cardsData[i]);
                const backTex = createBackTexture(cardsData[i]);
                cardTextures.push({ front: frontTex, back: backTex });
            }

            // 5. إنشاء المجسم (Box ثلاثي الأبعاد ليعطي سُمكاً للبطاقة)
            const geometry = new THREE.BoxGeometry(4.5, 6.75, 0.15); // العرض، الطول، السُمك
            
            // جعل لون الحواف الجانبية داكناً لتبدو البطاقة كقطعة صلبة ولا تظهر وكأنها داخل إطار
            const edgeMaterial = new THREE.MeshStandardMaterial({ color: 0x0f766e });
            const materials = [
                edgeMaterial, // يمين
                edgeMaterial, // يسار
                edgeMaterial, // أعلى
                edgeMaterial, // أسفل
                new THREE.MeshStandardMaterial({ map: cardTextures[0].front }), // الأمام
                new THREE.MeshStandardMaterial({ map: cardTextures[0].back })   // الخلف
            ];

            cardMesh = new THREE.Mesh(geometry, materials);
            cardMesh.castShadow = true; // البطاقة نفسها تصدر ظلاً
            scene.add(cardMesh);

            // 6. إضافة حركة طفو خفيفة للبطاقة
            gsap.to(cardMesh.position, {
                y: 0.15, // تقليل مسافة الطفو قليلاً ليظل الظل متصلاً
                duration: 2,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut"
            });

            // 7. التقاط النقرات لقلب البطاقة
            const raycaster = new THREE.Raycaster();
            const mouse = new THREE.Vector2();

            const handleClick = (e) => {
                if (isAnimating) return;
                const rect = renderer.domElement.getBoundingClientRect();
                
                // حساب إحداثيات الماوس أو اللمس
                let clientX = e.clientX;
                let clientY = e.clientY;
                
                if (e.touches && e.touches.length > 0) {
                    clientX = e.touches[0].clientX;
                    clientY = e.touches[0].clientY;
                }

                mouse.x = ( ( clientX - rect.left ) / rect.width ) * 2 - 1;
                mouse.y = - ( ( clientY - rect.top ) / rect.height ) * 2 + 1;
                
                raycaster.setFromCamera(mouse, camera);
                const intersects = raycaster.intersectObject(cardMesh);
                
                if (intersects.length > 0) {
                    flipCard();
                }
            };

            container.addEventListener('click', handleClick);
            container.addEventListener('touchstart', handleClick, {passive: true});

            // 8. بدء دورة الرسم
            animate();

            // إخفاء شاشة التحميل بعد الانتهاء
            document.getElementById('loader').style.display = 'none';
        }

        // حلقة الرسم (Animation Loop)
        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }

        // دالة قلب البطاقة 3D
        function flipCard() {
            isAnimating = true;
            isFlipped = !isFlipped;
            
            // تشغيل الصوت المناسب بناءً على حالة الكارت (سؤال ولا إجابة)
            if (isFlipped) {
                playAudio(cardsData[currentIndex].answerAudio);
            } else {
                playAudio(cardsData[currentIndex].questionAudio);
            }

            const targetRotation = isFlipped ? Math.PI : 0; // لفة بـ 180 درجة (Pi)
            
            // استخدام GSAP لحركة ناعمة وواقعية
            gsap.to(cardMesh.rotation, {
                y: targetRotation,
                duration: 0.8,
                ease: "back.out(1.2)",
                onComplete: () => { isAnimating = false; }
            });
        }

        // تحديث واجهة المستخدم والشريط
        function updateUI() {
            const progressPercentage = ((currentIndex + 1) / cardsData.length) * 100;
            document.getElementById('progressBar').style.width = `${progressPercentage}%`;
            document.getElementById('progressText').innerText = `كارت ${currentIndex + 1} من ${cardsData.length}`;
            
            // تحديث صور الـ Mesh للبطاقة الحالية
            cardMesh.material[4].map = cardTextures[currentIndex].front;
            cardMesh.material[5].map = cardTextures[currentIndex].back;
            cardMesh.material[4].needsUpdate = true;
            cardMesh.material[5].needsUpdate = true;
        }

        function nextCard() {
            if (isAnimating || !cardMesh) return;
            isAnimating = true;

            const executeChange = () => {
                currentIndex = (currentIndex + 1) % cardsData.length;
                if (currentIndex === 0) fireConfetti();
                updateUI();
                playAudio(cardsData[currentIndex].questionAudio); // شغل صوت السؤال للكارت الجديد
                isAnimating = false;
            };

            if (isFlipped) {
                isFlipped = false;
                gsap.to(cardMesh.rotation, {
                    y: 0,
                    duration: 0.4,
                    ease: "power2.inOut",
                    onComplete: executeChange
                });
            } else {
                // تأثير تصغير وتكبير عند التبديل
                gsap.to(cardMesh.scale, {
                    x: 0.8, y: 0.8, z: 0.8,
                    duration: 0.2,
                    yoyo: true,
                    repeat: 1,
                    onRepeat: executeChange
                });
            }
        }

        function prevCard() {
            if (isAnimating || !cardMesh) return;
            isAnimating = true;

            const executeChange = () => {
                currentIndex = (currentIndex - 1 + cardsData.length) % cardsData.length;
                updateUI();
                playAudio(cardsData[currentIndex].questionAudio); // شغل صوت السؤال للكارت الجديد
                isAnimating = false;
            };

            if (isFlipped) {
                isFlipped = false;
                gsap.to(cardMesh.rotation, {
                    y: 0,
                    duration: 0.4,
                    ease: "power2.inOut",
                    onComplete: executeChange
                });
            } else {
                gsap.to(cardMesh.scale, {
                    x: 0.8, y: 0.8, z: 0.8,
                    duration: 0.2,
                    yoyo: true,
                    repeat: 1,
                    onRepeat: executeChange
                });
            }
        }

        // تأثير الاحتفال (Confetti) عند الانتهاء
        function fireConfetti() {
            const canvas = document.getElementById('confettiCanvas');
            const ctx = canvas.getContext('2d');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            
            const particles = [];
            const colors = ['#0ea5e9', '#10b981', '#f59e0b', '#8b5cf6', '#ef4444'];
            
            for (let i = 0; i < 150; i++) {
                particles.push({
                    x: canvas.width / 2,
                    y: canvas.height / 2 + 100,
                    r: Math.random() * 8 + 3,
                    dx: Math.random() * 14 - 7,
                    dy: Math.random() * -15 - 5,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    life: 120
                });
            }
            
            function animateConfetti() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                let allDead = true;
                
                particles.forEach(p => {
                    if (p.life > 0) {
                        allDead = false;
                        ctx.beginPath();
                        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                        ctx.fillStyle = p.color;
                        ctx.fill();
                        
                        p.x += p.dx;
                        p.y += p.dy;
                        p.dy += 0.3; // جاذبية
                        p.life--;
                    }
                });
                
                if (!allDead) {
                    requestAnimationFrame(animateConfetti);
                } else {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                }
            }
            
            animateConfetti();
        }

        // تشغيل صوت الكارت الأول مع أول لمسة للصفحة (لتخطي حماية التشغيل التلقائي)
        let firstInteraction = false;
        document.body.addEventListener('click', () => {
            if (!firstInteraction && !isFlipped) {
                firstInteraction = true;
                playAudio(cardsData[currentIndex].questionAudio);
            }
        }, { once: true });

        // الانتظار حتى تحميل الخطوط لتجنب رسم الـ Canvas بخطوط افتراضية
        document.fonts.ready.then(() => {
            initThree();
        });

        // دعم أزرار الكيبورد
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') nextCard();
            if (e.key === 'ArrowRight') prevCard();
            if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                if(cardMesh) flipCard();
            }
        });
