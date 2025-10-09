export default function initEasterEgg() {
    console.log(
        "%c🌴 Welcome to the Jungle!",
        "color: orange; font-size: 14px; font-weight: bold;"
    );
    console.log(
        "%cHint: try to find the banana... 🍌",
        "color:#999; font-style: italic;"
    );

    window.banana = () => {
        alert("🍌 You found the banana! 🍌");
    };
}