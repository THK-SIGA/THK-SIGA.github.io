document.addEventListener("DOMContentLoaded", function () {
    var headerHtml = `<header>
        <a href="../index.html">
            <img src="../src/img/header/iconIndex.jpg" alt="">
        </a>
        <div class="gridContainer">
            <div class="dropdown">
                <button class=" dropbtn">SIGA</button>
                <div class="dropdown-content">
                    <a href="../html/SIGA_WolframAlpha.html">Wolfram Alpha</a>
                    <a href="../html/SIGA_Google_Colab.html">Google Colab</a>
                    <a href="../html/SIGA_Audacity.html">Audacity</a>
                    <a href="../html/SIGA_Sinus_und_Kosinus.html">Sinus und Kosinus</a>
                    <a href="../html/SIGA_Faltung.html">Faltung</a>
                    <a href="../html/SIGA_DFT.html">DFT</a>
                    <a href="../html/SIGA_Gleitender_Mittelwert.html">Gleitender Mittelwert</a>
                    <a href="../html/SIGA_Abtasttheorem.html">Abtasttheorem</a>
                    <a href="../html/SIGA_Leakage.html">Leakage</a>
                    <a href="../html/SIGA_Tierstimmen.html">Tierstimmen</a>
                    <a href="../html/SIGA_Erwartungswert_und_Varianz.html">Erwartungswert und Varianz</a>
                    <a href="../html/SIGA_Verteilungen.html">Verteilungen</a>
                    <a href="../html/SIGA_Stichprobe.html">Stichprobe</a>
                    <a href="../html/SIGA_Gezinkte_Wuerfel.html">Gezinkte Würfel</a>
                    <a href="../html/SIGA_Korrelationskoeffizient.html">Korrelationskoeffizient</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">BV</button>
                <div class="dropdown-content">
                    <a href="../html/BV_01.html">Thema 01</a>
                    <a href="../html/BV_02.html">Thema 02</a>
                    <a href="../html/BV_03.html">Thema 03</a>
                    <a href="../html/BV_04.html">Thema 04</a>
                    <a href="../html/BV_05.html">Thema 05</a>
                    <a href="../html/BV_06.html">Thema 06</a>
                    <a href="../html/BV_07.html">Thema 07</a>
                    <a href="../html/BV_08.html">Thema 08</a>
                    <a href="../html/BV_09.html">Thema 09</a>
                    <a href="../html/BV_10.html">Thema 10</a>
                    <a href="../html/BV_11.html">Thema 11</a>
                    <a href="../html/BV_12.html">Thema 12</a>
                </div>
            </div>
        </div>
        <a href="../html/SIGA_Linksammlung.html">
            <img src="../src/img/header/iconLink.jpg" alt="">
        </a>
    </header>`;

    var footerHtml =
        '<footer class="outerContainer">\
            <div class="container">\
                <div class="nowrap"> TH Köln </div>\
            </div>\
        </footer>';

    document.body.insertAdjacentHTML("afterbegin", headerHtml);
    document.body.insertAdjacentHTML("beforeend", footerHtml);
});
