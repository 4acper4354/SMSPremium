function changeFontSize() {
    if(document.getElementById("footerParagraph").style.fontSize == "11px") {
        document.getElementById("footerParagraph").innerHTML = "–––––––––––––––––––––––––––––––––––––––––––––</br>© 2023 SMSPREMIUM Sp. z o.o. Wszelkie prawa zastrzeżone.</br></br>Adres: Champ de Mars, 5 Avenue Anatole France, 75007 Paryż</br></br>OWNERS: Kacper S (49.5%) Kacper B (49.5%) Krzysztof K (1%)</br></br>Polityka prywatności | Regulamin | Kontakt</br>––––––––––––––––––––––––––––––––––––––––––––––"
    } else {
        document.getElementById("footerParagraph").innerHTML = "––––––––––––––––------–––––––––––––––––––––––––––––––</br>© 2023 SMSPREMIUM Sp. z o.o. Wszelkie prawa zastrzeżone.</br></br>Adres: Champ de Mars, 5 Avenue Anatole France, 75007 Paryż</br></br>OWNERS: Kacper S (49.5%) Kacper B (49.5%) Krzysztof K (1%)</br></br>Polityka prywatności | Regulamin | Kontakt</br>––––––––––––––––––––------––––––––––––––––––––––––––––"
    }
}
