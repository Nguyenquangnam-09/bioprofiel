
        // Create animated stars
        function createStars() {
            const starsContainer = document.getElementById('stars');
            const numberOfStars = 100;

            for (let i = 0; i < numberOfStars; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                
                // Random position
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                
                // Random size
                const size = Math.random() * 3 + 1;
                star.style.width = size + 'px';
                star.style.height = size + 'px';
                
                // Random animation delay
                star.style.animationDelay = Math.random() * 3 + 's';
                
                starsContainer.appendChild(star);
            }
        }

        // Initialize stars when page loads
        createStars();



        // Add parallax effect to decorative elements
        document.addEventListener('mousemove', (e) => {
            const decorativeElements = document.querySelectorAll('.decorative');
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;

            decorativeElements.forEach((element, index) => {
                const speed = (index + 1) * 0.5;
                const x = (mouseX - 0.5) * speed * 20;
                const y = (mouseY - 0.5) * speed * 20;
                
                element.style.transform = `translate(${x}px, ${y}px)`;
            });
        });

        // Copy to clipboard function
        function copyToClipboard(text) {
            navigator.clipboard.writeText(text).then(function() {
                // Create notification
                const notification = document.createElement('div');
                notification.style.cssText = `
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: linear-gradient(135deg, #4facfe, #00f2fe);
                    color: white;
                    padding: 15px 20px;
                    border-radius: 10px;
                    font-weight: 600;
                    box-shadow: 0 10px 30px rgba(79, 172, 254, 0.3);
                    z-index: 1000;
                    animation: slideIn 0.3s ease;
                `;
                notification.textContent = `Đã copy: ${text}`;
                
                // Add slide-in animation
                const style = document.createElement('style');
                style.textContent = `
                    @keyframes slideIn {
                        from { transform: translateX(100%); opacity: 0; }
                        to { transform: translateX(0); opacity: 1; }
                    }
                `;
                document.head.appendChild(style);
                
                document.body.appendChild(notification);
                
                // Remove notification after 3 seconds
                setTimeout(() => {
                    notification.style.animation = 'slideIn 0.3s ease reverse';
                    setTimeout(() => {
                        document.body.removeChild(notification);
                        document.head.removeChild(style);
                    }, 300);
                }, 3000);
            }).catch(function(err) {
                console.error('Could not copy text: ', err);
                alert('Không thể copy. Vui lòng copy thủ công: ' + text);
            });
        }

        // Show notification function
        function showNotification(message, color = '#4facfe') {
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: ${color};
                color: white;
                padding: 15px 20px;
                border-radius: 10px;
                font-weight: 600;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                z-index: 1000;
                animation: slideIn 0.3s ease;
            `;
            notification.textContent = message;
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.animation = 'slideIn 0.3s ease reverse';
                setTimeout(() => {
                    if (document.body.contains(notification)) {
                        document.body.removeChild(notification);
                    }
                }, 300);
            }, 3000);
        }


    


        const musicBtn = document.getElementById('music-btn');
        const music = document.getElementById('background-music');
        const musicIcon = musicBtn.querySelector('i');

        musicBtn.addEventListener('click', () => {
            if (music.paused) {
                music.play().catch(error => {
                    console.error('Lỗi phát nhạc:', error);
                });
                musicIcon.classList.replace('fa-play', 'fa-pause');
            } else {
                music.pause();
                musicIcon.classList.replace('fa-pause', 'fa-play');
            }
        });
    // Hàm copy số tài khoản
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Đã copy: " + text);
    });
}

// Tạo mã QR bằng thư viện qrcode.js
function generateQR(text) {
    const modal = document.getElementById('qrModal');
    modal.style.display = 'flex';

    const canvas = document.getElementById('qrcode');
    QRCode.toCanvas(canvas, text, function (error) {
        if (error) console.error(error);
    });
}

// Đóng modal QR
function closeQR() {
    document.getElementById('qrModal').style.display = 'none';
}
function showQR(imgPath) {
    const modal = document.getElementById('qrModal');
    modal.style.display = 'flex';

    const qrBox = document.getElementById('qrBox');
    qrBox.innerHTML = `<img src="${imgPath}" alt="QR Code" style="width:250px; border-radius:12px;">`;
}

function closeQR() {
    document.getElementById('qrModal').style.display = 'none';
}
function showQR(imgPath) {
    const modal = document.getElementById('qrModal');
    const qrBox = document.getElementById('qrBox');
    const downloadBtn = document.getElementById('downloadQR');

    modal.style.display = 'flex';
    qrBox.innerHTML = `<img src="${imgPath}" alt="QR Code">`;
    downloadBtn.href = imgPath; // gán link tải về
}

function closeQR() {
    document.getElementById('qrModal').style.display = 'none';
}
