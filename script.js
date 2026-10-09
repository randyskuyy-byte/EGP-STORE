    // ========== DATA GAMES ==========
    const games = [
      {
        id: "ml",
        name: "Mobile Legends",
        icon: '<img src="gambar/Logo ml.png" alt="Mobile Legends" class="game-icon-img">',
        color: "linear-gradient(135deg, #0b4f9e, #1a7ad4)",
        desc: "Diamond",
        idLabel: "User ID",
        hasZone: true,
        nominals: [
          { name: "86 Diamond", price: 22000 },
          { name: "172 Diamond", price: 43000 },
          { name: "257 Diamond", price: 64000 },
          { name: "344 Diamond", price: 85000 },
          { name: "706 Diamond", price: 172000 },
          { name: "1412 Diamond", price: 340000 },
        ],
      },
      {
        id: "pubg",
        name: "PUBG Mobile",
        icon: '<img src="gambar/Logo pubg.png" alt="PUBG Mobile" class="game-icon-img">',
        color: "linear-gradient(135deg, #b8860b, #daa520)",
        desc: "UC",
        idLabel: "ID Pemain",
        hasZone: false,
        nominals: [
          { name: "60 UC", price: 15000 },
          { name: "325 UC", price: 74000 },
          { name: "660 UC", price: 148000 },
          { name: "1800 UC", price: 390000 },
          { name: "3850 UC", price: 790000 },
          { name: "8100 UC", price: 1590000 },
        ],
      },
      {
        id: "ff",
        name: "Free Fire",
        icon: '<img src="gambar/Logo ff.png" alt="Free Fire" class="game-icon-img">',
        color: "linear-gradient(135deg, #e65100, #ff9800)",
        desc: "Diamond",
        idLabel: "ID Pemain",
        hasZone: false,
        nominals: [
          { name: "70 Diamond", price: 10000 },
          { name: "140 Diamond", price: 19000 },
          { name: "355 Diamond", price: 47000 },
          { name: "720 Diamond", price: 94000 },
          { name: "1450 Diamond", price: 188000 },
          { name: "2180 Diamond", price: 282000 },
        ],
      },
      {
        id: "genshin",
        name: "Genshin Impact",
        icon: '<img src="gambar/Logo genshin.png" alt="Genshin Impact" class="game-icon-img">',
        color: "linear-gradient(135deg, #00695c, #26a69a)",
        desc: "Genesis Crystal",
        idLabel: "UID",
        hasZone: false,
        nominals: [
          { name: "60 Genesis Crystal", price: 16000 },
          { name: "330 Genesis Crystal", price: 79000 },
          { name: "1090 Genesis Crystal", price: 249000 },
          { name: "2240 Genesis Crystal", price: 499000 },
          { name: "3880 Genesis Crystal", price: 799000 },
          { name: "8080 Genesis Crystal", price: 1599000 },
        ],
      },
      {
        id: "valorant",
        name: "Valorant",
        icon: '<img src="gambar/Logo valorant.png" alt="Valorant" class="game-icon-img">',
        color: "linear-gradient(135deg, #c62828, #ff5252)",
        desc: "VP",
        idLabel: "Riot ID",
        hasZone: true,
        nominals: [
          { name: "475 VP", price: 50000 },
          { name: "1000 VP", price: 100000 },
          { name: "2050 VP", price: 200000 },
          { name: "3650 VP", price: 350000 },
          { name: "5350 VP", price: 500000 },
          { name: "11000 VP", price: 1000000 },
        ],
      },
      {
        id: "honkai",
        name: "Honkai Star Rail",
        icon: '<img src="gambar/Logo honkai.png" alt="Honkai Star Rail" class="game-icon-img">',
        color: "linear-gradient(135deg, #4a148c, #9c27b0)",
        desc: "Oneiric Shard",
        idLabel: "UID",
        hasZone: false,
        nominals: [
          { name: "60 Oneiric Shard", price: 16000 },
          { name: "330 Oneiric Shard", price: 79000 },
          { name: "1090 Oneiric Shard", price: 249000 },
          { name: "2240 Oneiric Shard", price: 499000 },
          { name: "3880 Oneiric Shard", price: 799000 },
          { name: "8080 Oneiric Shard", price: 1599000 },
        ],
      },
      {
        id: "codm",
        name: "COD Mobile",
        icon: '<img src="gambar/Logo codm.png" alt="COD Mobile" class="game-icon-img">',    
        color: "linear-gradient(135deg, #37474f, #607d8b)",
        desc: "CP",
        idLabel: "Open ID",
        hasZone: false,
        nominals: [
          { name: "80 CP", price: 14000 },
          { name: "420 CP", price: 68000 },
          { name: "880 CP", price: 135000 },
          { name: "2400 CP", price: 345000 },
          { name: "5000 CP", price: 700000 },
          { name: "10800 CP", price: 1450000 },
        ],
      },
      {
        id: "roblox",
        name: "Roblox",
        icon: '<img src="gambar/Logo roblox.png" alt="Roblox" class="game-icon-img">',
        color: "linear-gradient(135deg, #b71c1c, #e53935)",
        desc: "Robux",
        idLabel: "Username",
        hasZone: false,
        nominals: [
          { name: "80 Robux", price: 15000 },
          { name: "400 Robux", price: 65000 },
          { name: "800 Robux", price: 125000 },
          { name: "1700 Robux", price: 260000 },
          { name: "4500 Robux", price: 680000 },
          { name: "10000 Robux", price: 1490000 },
        ],
      },
      {
        id: "steam",
        name: "Steam Wallet",
        icon: '<img src="gambar/Logo steam.png" alt="Steam Wallet" class="game-icon-img">',
        color: "linear-gradient(135deg, #1a237e, #3f51b5)",
        desc: "IDR",
        idLabel: "Steam ID",
        hasZone: false,
        nominals: [
          { name: "Rp 12.000", price: 13500 },
          { name: "Rp 45.000", price: 48000 },
          { name: "Rp 60.000", price: 63000 },
          { name: "Rp 90.000", price: 95000 },
          { name: "Rp 250.000", price: 260000 },
          { name: "Rp 400.000", price: 415000 },
        ],
      },
      {
        id: "pointblank",
        name: "Point Blank",
        icon: '<img src="gambar/Logo pointblank.png" alt="Point Blank" class="game-icon-img">',
        color: "linear-gradient(135deg, #bf360c, #ff7043)",
        desc: "G-Cash",
        idLabel: "ID Akun",
        hasZone: false,
        nominals: [
          { name: "12.000 G-Cash", price: 12000 },
          { name: "24.000 G-Cash", price: 23000 },
          { name: "60.000 G-Cash", price: 57000 },
          { name: "120.000 G-Cash", price: 114000 },
          { name: "320.000 G-Cash", price: 300000 },
          { name: "600.000 G-Cash", price: 570000 },
        ],
      },
      {
        id: "arenaofvalor",
        name: "Arena of Valor",
        icon: '<img src="gambar/Logo arenaofvalor.png" alt="Arena of Valor" class="game-icon-img">',
        color: "linear-gradient(135deg, #006064, #00acc1)",
        desc: "Voucher",
        idLabel: "ID Akun",
        hasZone: false,
        nominals: [
          { name: "40 Voucher", price: 10000 },
          { name: "80 Voucher", price: 19000 },
          { name: "240 Voucher", price: 55000 },
          { name: "400 Voucher", price: 90000 },
          { name: "800 Voucher", price: 175000 },
          { name: "1600 Voucher", price: 345000 },
        ],
      },
      {
        id: "zepeto",
        name: "Zepeto",
        icon: '<img src="gambar/Logo zepeto.png" alt="Zepeto" class="game-icon-img">',
        color: "linear-gradient(135deg, #4a148c, #ce93d8)",
        desc: "ZEM",
        idLabel: "ID Akun",
        hasZone: false,
        nominals: [
          { name: "60 ZEM", price: 15000 },
          { name: "300 ZEM", price: 70000 },
          { name: "500 ZEM", price: 115000 },
          { name: "1000 ZEM", price: 225000 },
          { name: "2000 ZEM", price: 440000 },
          { name: "4000 ZEM", price: 870000 },
        ],
      },
    ];

    // ========== DATA FAQ ==========
    const faqs = [
      {
        q: "Berapa lama proses top up berlangsung?",
        a: "Rata-rata proses top up hanya membutuhkan waktu 10–30 detik setelah pembayaran dikonfirmasi. Sistem kami berjalan otomatis 24 jam.",
      },
      {
        q: "Apakah aman top up di sini?",
        a: "Ya, EGPSTORE menggunakan sistem enkripsi dan bekerja sama dengan penyedia pembayaran resmi. Data akun kamu tidak pernah disimpan di server kami.",
      },
      {
        q: "Metode pembayaran apa saja yang tersedia?",
        a: "Kami menerima transfer bank (BCA, Mandiri, BRI, BNI), e-wallet (GoPay, OVO, DANA, ShopeePay), QRIS, dan pulsa.",
      },
      {
        q: "Bagaimana jika diamond tidak masuk?",
        a: "Hubungi Customer Service melalui live chat atau Discord kami dengan menyertakan bukti pembayaran. Tim kami akan mengecek dan menindaklanjuti maksimal 1×24 jam.",
      },
      {
        q: "Apakah ada minimum transaksi?",
        a: "Tidak ada minimum transaksi. Kamu bisa top up sesuai nominal yang tersedia, mulai dari Rp 10.000.",
      },
      {
        q: "Bisakah top up untuk akun dari server lain?",
        a: "Tentu. Untuk Mobile Legends, kamu cukup memasukkan ID dan Zone ID dari server yang kamu mainkan.",
      },
    ];

    // ========== PAYMENT METHODS ==========
    const payMethods = [
      { id: "gopay", name: "GoPay", icon: "💚" },
      { id: "ovo", name: "OVO", icon: "💜" },
      { id: "dana", name: "DANA", icon: "💙" },
      { id: "qris", name: "QRIS", icon: "📱" },
      { id: "bca", name: "BCA VA", icon: "🏦" },
      { id: "mandiri", name: "Mandiri VA", icon: "🏦" },
    ];

    // ========== STATE ==========
    const STORAGE_HISTORY_KEY = "nyaigaul_history";
    const STORAGE_REVIEWS_KEY = "egpstore_reviews";
    const $ = (id) => document.getElementById(id);

    const state = {
      selectedGame: null,
      selectedNominal: null,
      selectedPay: null,
      payTimerInterval: null,
      payTimeLeft: 0,
    };
    let heroSlideIndex = 0;
    let heroSlideTimer = null;

    function escapeHtml(value) {
      return String(value ?? "").replace(/[&<>"']/g, (char) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      }[char]));
    }

    // ========== RENDER GAMES ==========
    function renderGames(filter = "") {
      const grid = $("gamesGrid");
      if (!grid) return;

      const q = String(filter).toLowerCase().trim();
      const filtered = games.filter(
        (game) => game.name.toLowerCase().includes(q) || game.desc.toLowerCase().includes(q)
      );

      if (!filtered.length) {
        grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:var(--text-muted)">Game tidak ditemukan.</p>`;
        return;
      }

      grid.innerHTML = filtered
        .map(
          (game) => `
        <div class="game-card" onclick="openTopup('${game.id}')">
          <div class="game-thumb" style="background:${game.color}">${game.icon}</div>
          <h3>${escapeHtml(game.name)}</h3>
          <small>${escapeHtml(game.desc)}</small>
        </div>`
        )
        .join("");
    }

    function filterGames() {
      const input = $("gameFilter");
      if (!input) return;
      renderGames(input.value);
    }

    function scrollToGames() {
      const heroSearch = $("heroSearch");
      const gameFilter = $("gameFilter");
      const gamesSection = $("games");
      const q = heroSearch ? heroSearch.value.trim() : "";

      if (gameFilter) gameFilter.value = q;
      renderGames(q);

      if (gamesSection) {
        gamesSection.scrollIntoView({ behavior: "smooth" });
      }
    }

    function renderHeroSlide(index) {
      const card = $("heroCard");
      const game = games[index];
      if (!card || !game) return;

      const imageSource = game.icon.match(/src="([^"]+)"/);
      if (!imageSource) return;

      heroSlideIndex = index;
      const image = $("heroGameImage");
      const nominalOne = game.nominals[0];
      const nominalTwo = game.nominals[1];
      image.src = imageSource[1];
      image.alt = `${game.name} Logo`;
      $("heroGameName").textContent = game.name;
      $("heroNominalOne").textContent = `${game.desc === "Diamond" ? "💎 " : ""}${nominalOne.name}`;
      $("heroPriceOne").textContent = formatRupiah(nominalOne.price);
      $("heroNominalTwo").textContent = `${game.desc === "Diamond" ? "💎 " : ""}${nominalTwo.name}`;
      $("heroPriceTwo").textContent = formatRupiah(nominalTwo.price);
      $("heroTopupButton").onclick = () => openTopup(game.id);

      const dots = $("heroSlideDots");
      dots.innerHTML = games
        .map(
          (slideGame, slideIndex) => `
          <button class="hero-slide-dot${slideIndex === index ? " active" : ""}"
            type="button"
            aria-label="Tampilkan ${escapeHtml(slideGame.name)}"
            aria-current="${slideIndex === index ? "true" : "false"}"
            onclick="showHeroSlide(${slideIndex})"></button>`
        )
        .join("");

      card.classList.remove("is-sliding");
      void card.offsetWidth;
      card.classList.add("is-sliding");
    }

    function showHeroSlide(index) {
      renderHeroSlide(index);
      startHeroCarousel();
    }

    function startHeroCarousel() {
      clearInterval(heroSlideTimer);
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      heroSlideTimer = setInterval(() => {
        renderHeroSlide((heroSlideIndex + 1) % games.length);
      }, 4500);
    }

    // ========== CUSTOMER REVIEWS ==========
    function getReviews() {
      try {
        const raw = localStorage.getItem(STORAGE_REVIEWS_KEY);
        const reviews = raw ? JSON.parse(raw) : [];
        if (!Array.isArray(reviews)) throw new Error("Invalid review data");
        return reviews.filter((review) =>
          review &&
          typeof review.name === "string" &&
          typeof review.message === "string" &&
          Number.isInteger(Number(review.rating)) &&
          Number(review.rating) >= 1 &&
          Number(review.rating) <= 5 &&
          typeof review.date === "string"
        );
      } catch (error) {
        showToast("Ulasan di perangkat ini tidak dapat dibaca.");
        return [];
      }
    }

    function renderReviews() {
      const list = $("reviewList");
      const average = $("reviewAverage");
      const averageStars = $("reviewAverageStars");
      const count = $("reviewCount");
      if (!list || !average || !averageStars || !count) return;

      const reviews = getReviews();
      const total = reviews.reduce((sum, review) => sum + Number(review.rating), 0);
      const score = reviews.length ? total / reviews.length : 0;

      average.textContent = reviews.length ? score.toFixed(1) : "—";
      averageStars.textContent = reviews.length
        ? `${"★".repeat(Math.round(score))}${"☆".repeat(5 - Math.round(score))}`
        : "☆☆☆☆☆";
      averageStars.setAttribute("aria-label", reviews.length ? `Rata-rata ${score.toFixed(1)} dari 5 bintang` : "Belum ada rating");
      count.textContent = reviews.length
        ? `${reviews.length} ulasan`
        : "Belum ada ulasan";

      if (!reviews.length) {
        list.innerHTML = '<div class="review-empty">Jadilah pelanggan pertama yang memberi ulasan.</div>';
        return;
      }

      list.replaceChildren();
      reviews.forEach((review) => {
        const card = document.createElement("article");
        card.className = "testi-card";

        const stars = document.createElement("div");
        stars.className = "stars";
        stars.textContent = `${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}`;
        stars.setAttribute("aria-label", `${review.rating} dari 5 bintang`);

        const message = document.createElement("p");
        message.className = "review-message";
        message.textContent = review.message;

        const user = document.createElement("div");
        user.className = "testi-user";

        const avatar = document.createElement("div");
        avatar.className = "avatar";
        avatar.textContent = review.name.trim().charAt(0).toUpperCase();
        avatar.setAttribute("aria-hidden", "true");

        const details = document.createElement("div");
        const name = document.createElement("strong");
        name.textContent = review.name;
        const date = document.createElement("span");
        date.textContent = review.date;
        details.append(name, date);
        user.append(avatar, details);
        card.append(stars, message, user);
        list.append(card);
      });
    }

    function saveReview(review) {
      try {
        const reviews = getReviews();
        reviews.unshift(review);
        localStorage.setItem(STORAGE_REVIEWS_KEY, JSON.stringify(reviews));
        return true;
      } catch (error) {
        showToast("Ulasan gagal disimpan. Coba lagi di perangkat ini.");
        return false;
      }
    }

    // ========== RENDER FAQ ==========
    function renderFAQ() {
      const list = $("faqList");
      if (!list) return;

      list.innerHTML = faqs
        .map(
          (faq, index) => `
        <div class="faq-item" id="faq-${index}">
          <button class="faq-q" onclick="toggleFAQ(${index})">
            <span>${escapeHtml(faq.q)}</span>
            <span class="chevron">▼</span>
          </button>
          <div class="faq-a" id="faq-a-${index}">
            <div class="faq-a-inner">${escapeHtml(faq.a)}</div>
          </div>
        </div>`
        )
        .join("");
    }

    function toggleFAQ(index) {
      const item = document.getElementById(`faq-${index}`);
      const answer = document.getElementById(`faq-a-${index}`);
      if (!item || !answer) return;

      const isOpen = item.classList.contains("open");

      document.querySelectorAll(".faq-item").forEach((el) => {
        el.classList.remove("open");
        const faqAnswer = el.querySelector(".faq-a");
        if (faqAnswer) faqAnswer.style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add("open");
        answer.style.maxHeight = `${answer.scrollHeight}px`;
      }
    }

    // ========== MODAL TOPUP ==========
    function openTopup(gameId) {
      const selected = games.find((game) => game.id === gameId);
      if (!selected) return;

      state.selectedGame = selected;
      state.selectedNominal = null;
      state.selectedPay = null;

      $("modalTitle").textContent = selected.name;
      $("modalDesc").textContent = `Top up ${selected.desc} - ${selected.name}`;
      $("idLabel").textContent = selected.idLabel;

      const modalIcon = $("modalIcon");
      modalIcon.style.background = selected.color;
      modalIcon.innerHTML = selected.icon;

      const zoneInput = $("zoneId");
      zoneInput.style.display = selected.hasZone ? "block" : "none";
      zoneInput.placeholder = selected.hasZone ? "Zone ID" : "";

      $("userId").value = "";
      zoneInput.value = "";

      renderNominals();
      renderPayMethods();
      updateTotal();

      $("topupModal").classList.add("active");
      document.body.style.overflow = "hidden";
    }

    function closeTopup() {
      const topupModal = $("topupModal");
      if (topupModal) topupModal.classList.remove("active");
      document.body.style.overflow = "";
    }

    function renderNominals() {
      const grid = $("nominalGrid");
      if (!grid || !state.selectedGame) return;

      grid.innerHTML = state.selectedGame.nominals
        .map(
          (nominal, index) => `
        <div class="nominal-item" id="nom-${index}" onclick="selectNominal(${index})">
          <div class="name">${state.selectedGame.desc === "Diamond" ? '<span class="nominal-diamond-icon" aria-hidden="true">💎</span>' : ""}${escapeHtml(nominal.name)}</div>
          <div class="price">${formatRupiah(nominal.price)}</div>
        </div>`
        )
        .join("");
    }

    function selectNominal(index) {
      if (!state.selectedGame) return;
      state.selectedNominal = state.selectedGame.nominals[index];
      document.querySelectorAll(".nominal-item").forEach((el) => el.classList.remove("selected"));
      const selected = document.getElementById(`nom-${index}`);
      if (selected) selected.classList.add("selected");
      updateTotal();
    }

    function renderPayMethods() {
      const grid = $("payMethods");
      if (!grid) return;

      grid.innerHTML = payMethods
        .map(
          (payment, index) => `
        <div class="pay-item" id="pay-${index}" onclick="selectPay(${index})">
          <span class="pay-icon">${payment.icon}</span>
          <span>${payment.name}</span>
        </div>`
        )
        .join("");
    }

    function selectPay(index) {
      state.selectedPay = payMethods[index];
      document.querySelectorAll(".pay-item").forEach((el) => el.classList.remove("selected"));
      const selected = document.getElementById(`pay-${index}`);
      if (selected) selected.classList.add("selected");
      updateTotal();
    }

    function updateTotal() {
      const totalElement = $("totalPrice");
      if (!totalElement) return;
      totalElement.textContent = state.selectedNominal ? formatRupiah(state.selectedNominal.price) : "Rp 0";
    }

    function checkout() {
      const game = state.selectedGame;
      if (!game) return;

      const userId = $("userId").value.trim();

      if (!userId) {
        showToast(`⚠️ Mohon isi ${game.idLabel} terlebih dahulu.`);
        return;
      }
      if (game.hasZone && !$("zoneId").value.trim()) {
        showToast("⚠️ Mohon isi Zone ID terlebih dahulu.");
        return;
      }
      if (!state.selectedNominal) {
        showToast("⚠️ Pilih nominal top up terlebih dahulu.");
        return;
      }
      if (!state.selectedPay) {
        showToast("⚠️ Pilih metode pembayaran terlebih dahulu.");
        return;
      }

      const zoneVal = game.hasZone ? $("zoneId").value.trim() : "";
      const userIdFull = zoneVal ? `${userId} (${zoneVal})` : userId;
      const orderNo = `TRX-${Date.now().toString().slice(-8)}`;
      const total = state.selectedNominal.price;

      $("orderNo").textContent = orderNo;
      $("orderGame").textContent = game.name;
      $("orderNominal").textContent = state.selectedNominal.name;
      $("orderUser").textContent = userIdFull;
      $("orderPay").textContent = state.selectedPay.name;
      $("orderTotal").textContent = formatRupiah(total);
      $("copyAmountVal").textContent = formatRupiah(total);
      $("qrPayName").textContent = `${state.selectedPay.name} • QRIS`;

      const qrPayload = `QRIS|EGPSTORE|${orderNo}|${total}|${game.name}|${userIdFull}`;
      generateQR(qrPayload);

      startPayTimer(300);
      closeTopup();
      $("payModal").classList.add("active");
      document.body.style.overflow = "hidden";
    }

    // ========== QR CODE GENERATOR (canvas-based, self-contained) ==========
    function generateQR(text) {
      const container = $("qrCodeContainer");
      if (!container) return;
      container.innerHTML = "";

      if (typeof window.qrcode !== "undefined") {
        try {
          const qr = window.qrcode(0, "M");
          qr.addData(text);
          qr.make();
          const cellCount = qr.getModuleCount();
          const size = 200;
          const cellSize = size / cellCount;

          const canvas = document.createElement("canvas");
          canvas.width = size;
          canvas.height = size;
          const ctx = canvas.getContext("2d");

          ctx.fillStyle = "#ffffff";
          ctx.fillRect(0, 0, size, size);

          ctx.fillStyle = "#1a1a2e";
          for (let row = 0; row < cellCount; row++) {
            for (let col = 0; col < cellCount; col++) {
              if (qr.isDark(row, col)) {
                ctx.fillRect(col * cellSize, row * cellSize, cellSize + 0.5, cellSize + 0.5);
              }
            }
          }

          const logoSize = 40;
          const logoX = (size - logoSize) / 2;
          const logoY = (size - logoSize) / 2;
          ctx.fillStyle = "#ffffff";
          ctx.beginPath();
          ctx.roundRect(logoX - 2, logoY - 2, logoSize + 4, logoSize + 4, 6);
          ctx.fill();
          ctx.fillStyle = "#6c5ce7";
          ctx.beginPath();
          ctx.roundRect(logoX, logoY, logoSize, logoSize, 4);
          ctx.fill();
          ctx.fillStyle = "#ffffff";
          ctx.font = "bold 14px sans-serif";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText("QR", size / 2, size / 2);

          container.appendChild(canvas);
          return;
        } catch (error) {
          drawPlaceholderQR(container, text);
          return;
        }
      }

      drawPlaceholderQR(container, text);
    }

    function drawPlaceholderQR(container, text) {
      const size = 200;
      const cellCount = 25;
      const cellSize = size / cellCount;

      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");

      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, size, size);

      let hash = 0;
      for (let i = 0; i < text.length; i++) {
        hash = ((hash << 5) - hash) + text.charCodeAt(i);
        hash |= 0;
      }

      ctx.fillStyle = "#1a1a2e";
      for (let row = 0; row < cellCount; row++) {
        for (let col = 0; col < cellCount; col++) {
          const cx = col - cellCount / 2;
          const cy = row - cellCount / 2;
          if (Math.abs(cx) < 3 && Math.abs(cy) < 3) continue;

          const val = ((hash * (row + 1) * (col + 7) + row * 31 + col * 17) % 100);
          if (val > 45) {
            ctx.fillRect(col * cellSize, row * cellSize, cellSize + 0.5, cellSize + 0.5);
          }
        }
      }

      function drawFinder(x, y) {
        ctx.fillStyle = "#1a1a2e";
        ctx.fillRect(x * cellSize, y * cellSize, 7 * cellSize, 7 * cellSize);
        ctx.fillStyle = "#ffffff";
        ctx.fillRect((x + 1) * cellSize, (y + 1) * cellSize, 5 * cellSize, 5 * cellSize);
        ctx.fillStyle = "#1a1a2e";
        ctx.fillRect((x + 2) * cellSize, (y + 2) * cellSize, 3 * cellSize, 3 * cellSize);
      }

      drawFinder(0, 0);
      drawFinder(cellCount - 7, 0);
      drawFinder(0, cellCount - 7);

      const logoSize = 36;
      const logoX = (size - logoSize) / 2;
      const logoY = (size - logoSize) / 2;
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.roundRect(logoX - 2, logoY - 2, logoSize + 4, logoSize + 4, 6);
      ctx.fill();
      ctx.fillStyle = "#6c5ce7";
      ctx.beginPath();
      ctx.roundRect(logoX, logoY, logoSize, logoSize, 4);
      ctx.fill();
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 13px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("QRIS", size / 2, size / 2);

      container.appendChild(canvas);
    }

    // ========== PAY TIMER ==========
    function startPayTimer(seconds) {
      state.payTimeLeft = seconds;
      updateTimerDisplay();
      clearInterval(state.payTimerInterval);
      state.payTimerInterval = setInterval(() => {
        state.payTimeLeft -= 1;

        if (state.payTimeLeft <= 0) {
          clearInterval(state.payTimerInterval);
          state.payTimerInterval = null;
          state.payTimeLeft = 0;
          const payTimer = $("payTimer");
          if (payTimer) payTimer.textContent = "00:00";
          showToast("⏰ Waktu pembayaran habis. Silakan buat pesanan baru.");
          return;
        }

        updateTimerDisplay();
      }, 1000);
    }

    function updateTimerDisplay() {
      const timer = $("payTimer");
      if (!timer) return;

      const minutes = Math.floor(state.payTimeLeft / 60).toString().padStart(2, "0");
      const seconds = (state.payTimeLeft % 60).toString().padStart(2, "0");
      timer.textContent = `${minutes}:${seconds}`;
    }

    // ========== COPY AMOUNT ==========
    function copyAmount() {
      const value = $("copyAmountVal")?.textContent || "";
      const button = $("copyBtnText");

      if (!navigator.clipboard) {
        showToast(`Gagal menyalin. Salin manual: ${value}`);
        return;
      }

      navigator.clipboard.writeText(value)
        .then(() => {
          if (button) button.textContent = "✓ Tersalin!";
          setTimeout(() => {
            if (button) button.textContent = "📋 Salin Nominal";
          }, 2000);
        })
        .catch(() => {
          showToast(`Gagal menyalin. Salin manual: ${value}`);
        });
    }

    // ========== ORDER HISTORY (localStorage) ==========
    function getHistory() {
      try {
        const raw = localStorage.getItem(STORAGE_HISTORY_KEY);
        return raw ? JSON.parse(raw) : [];
      } catch (error) {
        return [];
      }
    }

    function saveHistory(order) {
      const list = getHistory();
      list.unshift(order);
      localStorage.setItem(STORAGE_HISTORY_KEY, JSON.stringify(list));
      updateHistoryBadge();
    }

    function updateHistoryBadge() {
      const count = getHistory().length;
      const badge = $("historyBadge");
      if (badge) badge.textContent = count;
    }

    function openHistory() {
      const navLinks = $("navLinks");
      if (navLinks) navLinks.classList.remove("open");
      renderHistory();
      const histModal = $("histModal");
      if (histModal) histModal.classList.add("active");
      document.body.style.overflow = "hidden";
    }

    function closeHistory() {
      const histModal = $("histModal");
      if (histModal) histModal.classList.remove("active");
      document.body.style.overflow = "";
    }

    function renderHistory() {
      const body = $("histBody");
      if (!body) return;

      const list = getHistory();

      if (!list.length) {
        body.innerHTML = `
          <div class="hist-empty">
            <span class="big-icon">📭</span>
            <p>Belum ada riwayat top up.</p>
            <p style="font-size:0.85rem;margin-top:6px">Mulai top up sekarang!</p>
          </div>`;
        return;
      }

      body.innerHTML = list
        .map(
          (order) => `
        <div class="hist-item">
          <div class="hist-item-top">
            <div class="hist-item-icon" style="background:${order.color}">${order.icon}</div>
            <div class="hist-item-info">
              <h4>${escapeHtml(order.game)} — ${escapeHtml(order.nominal)}</h4>
              <small>${escapeHtml(order.orderNo)} • ${escapeHtml(order.date)}</small>
            </div>
            <span class="hist-status ${order.status === "Berhasil" ? "success" : "pending"}">${escapeHtml(order.status)}</span>
          </div>
          <div class="hist-item-details">
            <div><span>ID Akun: </span><strong>${escapeHtml(order.userId)}</strong></div>
            <div><span>Metode: </span><strong>${escapeHtml(order.pay)}</strong></div>
            <div class="hist-item-price">${escapeHtml(order.price)}</div>
          </div>
        </div>`
        )
        .join("") +
        `<button class="hist-clear" onclick="clearHistory()">🗑 Hapus Semua Riwayat</button>`;
    }

    function clearHistory() {
      if (!confirm("Hapus semua riwayat top up?")) return;
      localStorage.removeItem(STORAGE_HISTORY_KEY);
      updateHistoryBadge();
      renderHistory();
      showToast("🗑 Riwayat telah dihapus.");
    }

    // ========== CONFIRM PAYMENT ==========
    function confirmPayment() {
      clearInterval(state.payTimerInterval);
      state.payTimerInterval = null;
      state.payTimeLeft = 0;

      const order = {
        orderNo: $("orderNo").textContent,
        game: $("orderGame").textContent,
        nominal: $("orderNominal").textContent,
        userId: $("orderUser").textContent,
        pay: $("orderPay").textContent,
        price: $("orderTotal").textContent,
        color: state.selectedGame ? state.selectedGame.color : "var(--card)",
        icon: state.selectedGame ? state.selectedGame.icon : "🎮",
        status: "Berhasil",
        date: new Date().toLocaleString("id-ID", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      saveHistory(order);

      closePayModal();
      showToast("✅ Pembayaran diterima! Cek riwayat di pojok kanan atas.");
    }

    function closePayModal() {
      clearInterval(state.payTimerInterval);
      state.payTimerInterval = null;
      state.payTimeLeft = 0;
      const payModal = $("payModal");
      if (payModal) payModal.classList.remove("active");
      document.body.style.overflow = "";
    }

    // ========== CUSTOMER SUPPORT CHAT ==========
    function toggleSupportChat(open) {
      const panel = $("chatPanel");
      const launcher = $("chatLauncher");
      const input = $("chatInput");
      if (!panel || !launcher) return;

      panel.classList.toggle("open", open);
      panel.setAttribute("aria-hidden", String(!open));
      launcher.setAttribute("aria-expanded", String(open));
      if (open && input) input.focus();
      if (!open) launcher.focus();
    }

    function getSupportReply(message) {
      const text = message.toLowerCase();

      if (/belum masuk|tidak masuk|belum diterima|diamond.*masuk|top.?up.*lama/.test(text)) {
        return "Coba cek kembali User ID dan Zone ID, lalu pastikan pembayaran sudah dikonfirmasi. Untuk demo ini, status pesanan yang sudah dikonfirmasi dapat dilihat di menu Riwayat. Jika masih bermasalah, siapkan nomor pesanan dan bukti pembayaran untuk petugas toko.";
      }
      if (/bayar|pembayaran|qris|e.?wallet|gopay|dana|ovo|transfer/.test(text)) {
        return "Pilih metode pembayaran saat checkout, lalu ikuti instruksi QR yang muncul. Pastikan nominalnya sesuai sebelum membayar. Setelah pembayaran berhasil, tekan “Saya Sudah Bayar” untuk memperbarui riwayat. Catatan: alur pembayaran di halaman ini masih simulasi.";
      }
      if (/riwayat|pesanan|status|cek order|nomor pesanan/.test(text)) {
        return "Buka tombol “Riwayat” di bagian atas halaman untuk melihat pesanan yang sudah dikonfirmasi. Simpan nomor pesanan jika perlu meminta bantuan petugas toko. Fitur transaksi di halaman ini masih berupa demo.";
      }
      if (/cara|mulai|top.?up|beli|nominal/.test(text)) {
        return "Pilih game, masukkan User ID (serta Zone ID jika diminta), pilih nominal dan metode pembayaran, lalu lanjutkan checkout. Jangan pernah bagikan password akun game.";
      }
      if (/aman|password|kata sandi|data akun|id akun/.test(text)) {
        return "Untuk top up, biasanya cukup masukkan ID pemain yang diminta game. Jangan pernah kirim password, kode OTP, atau data login kepada siapa pun, termasuk lewat chat.";
      }
      if (/petugas|admin|cs|manusia|komplain|refund|batal|pengembalian/.test(text)) {
        return "Saya bot otomatis yang menjawab pertanyaan umum 24/7. Chat ini belum terhubung ke petugas live, jadi untuk komplain atau bantuan transaksi nyata, hubungi Customer Service resmi toko melalui kanal yang tertera di situs toko tersebut.";
      }
      return "Aku bisa bantu soal cara top up, pembayaran, status pesanan, dan keamanan akun. Coba tulis pertanyaan dengan kata yang lebih spesifik atau pilih salah satu topik di atas. Chat ini adalah bot otomatis demo, bukan petugas live.";
    }

    function appendChatMessage(message, isUser) {
      const messages = $("chatMessages");
      if (!messages) return;

      const bubble = document.createElement("div");
      bubble.className = `chat-message ${isUser ? "user-message" : "bot-message"}`;
      const text = document.createElement("p");
      text.textContent = message;
      const time = document.createElement("time");
      time.textContent = isUser ? "Kamu" : "Asisten otomatis";
      bubble.append(text, time);
      messages.appendChild(bubble);
      messages.scrollTop = messages.scrollHeight;
    }

    function sendSupportMessage(message) {
      const trimmedMessage = message.trim();
      if (!trimmedMessage) return;

      appendChatMessage(trimmedMessage, true);
      appendChatMessage(getSupportReply(trimmedMessage), false);
    }

    // ========== UTIL ==========
    function formatRupiah(value) {
      return `Rp ${Number(value).toLocaleString("id-ID")}`;
    }

    function showToast(msg) {
      const toast = $("toast");
      if (!toast) return;

      toast.textContent = msg;
      toast.classList.add("show");
      clearTimeout(toast._timer);
      toast._timer = setTimeout(() => toast.classList.remove("show"), 3500);
    }

    // ========== INIT ==========
    document.addEventListener("DOMContentLoaded", () => {
      renderGames();
      renderFAQ();
      renderReviews();
      updateHistoryBadge();
      renderHeroSlide(heroSlideIndex);
      startHeroCarousel();

      const heroCard = $("heroCard");
      if (heroCard) {
        heroCard.addEventListener("mouseenter", () => clearInterval(heroSlideTimer));
        heroCard.addEventListener("mouseleave", startHeroCarousel);
        heroCard.addEventListener("focusin", () => clearInterval(heroSlideTimer));
        heroCard.addEventListener("focusout", (event) => {
          if (!heroCard.contains(event.relatedTarget)) startHeroCarousel();
        });
      }

      const hamburger = $("hamburger");
      if (hamburger) {
        hamburger.addEventListener("click", () => {
          const navLinks = $("navLinks");
          if (navLinks) navLinks.classList.toggle("open");
        });
      }

      const reviewForm = $("reviewForm");
      if (reviewForm) {
        reviewForm.addEventListener("submit", (event) => {
          event.preventDefault();
          const formData = new FormData(reviewForm);
          const review = {
            name: String(formData.get("name") || "").trim(),
            rating: Number(formData.get("rating")),
            message: String(formData.get("message") || "").trim(),
            date: new Date().toLocaleDateString("id-ID", {
              day: "numeric",
              month: "short",
              year: "numeric",
            }),
          };
          if (!review.name || !review.message || !review.rating) return;
          if (saveReview(review)) {
            reviewForm.reset();
            renderReviews();
            showToast("Terima kasih, ulasanmu berhasil disimpan.");
          }
        });
      }

      const chatLauncher = $("chatLauncher");
      const chatClose = $("chatClose");
      const chatForm = $("chatForm");
      const chatInput = $("chatInput");
      if (chatLauncher) {
        chatLauncher.addEventListener("click", () => {
          toggleSupportChat(chatLauncher.getAttribute("aria-expanded") !== "true");
        });
      }
      if (chatClose) chatClose.addEventListener("click", () => toggleSupportChat(false));
      if (chatForm && chatInput) {
        chatForm.addEventListener("submit", (event) => {
          event.preventDefault();
          sendSupportMessage(chatInput.value);
          chatInput.value = "";
          chatInput.focus();
        });
      }
      document.querySelectorAll("[data-chat-question]").forEach((button) => {
        button.addEventListener("click", () => {
          sendSupportMessage(button.getAttribute("data-chat-question") || "");
          if (chatInput) chatInput.focus();
        });
      });

      const topupModal = $("topupModal");
      if (topupModal) {
        topupModal.addEventListener("click", (event) => {
          if (event.target.id === "topupModal") closeTopup();
        });
      }

      const payModal = $("payModal");
      if (payModal) {
        payModal.addEventListener("click", (event) => {
          if (event.target.id === "payModal") closePayModal();
        });
      }

      const histModal = $("histModal");
      if (histModal) {
        histModal.addEventListener("click", (event) => {
          if (event.target.id === "histModal") closeHistory();
        });
      }

      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          closeTopup();
          closePayModal();
          closeHistory();
          if ($("chatPanel")?.classList.contains("open")) toggleSupportChat(false);
        }
      });
    });
