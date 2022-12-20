function animateAll(accounts = [], animationLengthInSeconds = 1) {
    for (let i = 0; i < accounts.length; i++) {
        const wait = i * (animationLengthInSeconds * 1100);
        setTimeout(() => toggleAnimation(accounts[i], animationLengthInSeconds), wait);
    }
}

function toggleAnimation(to = 10, animationLengthInSeconds = 1) {
    return new Promise(resolve => {
        const singleAnimationLength = animationLengthInSeconds * 7 / 8;
        const timeoutLength = animationLengthInSeconds * 7 / 8 * 1000;

        document.getElementById("Paket-1").style.animation = `moveParcelTo${to} ${singleAnimationLength}s ease-in-out`;
        document.getElementById("Infoanzeige").style.animation = `hideInformation ${singleAnimationLength/2}s ease-in-out`;
        document.getElementById("Paket-4").style.animation = `makeMainParcel ${singleAnimationLength}s ease-in-out`;
        document.getElementById("Paket-3").style.animation = `moveForward ${singleAnimationLength}s ease-in-out`;
        document.getElementById("Paket-2").style.animation = `moveForward ${singleAnimationLength}s ease-in-out`;

        setTimeout(() => {
            // document.getElementById("letterType").textContent = "Paket"
            // document.getElementById("city").textContent = "68766 Hockenheim"
            // document.getElementById("country").textContent = "Österreich"
            document.getElementById("Infoanzeige").style.animation = `hideInformation ${singleAnimationLength}s ease-in reverse`;
        }, timeoutLength)

        setTimeout(() => {
            document.getElementById("Paket-1").style.animation = "";
            document.getElementById("Paket-2").style.animation = "";
            document.getElementById("Paket-3").style.animation = "";
            document.getElementById("Paket-4").style.animation = "";
            document.getElementById("Infoanzeige").style.animation = "";

            setTimeout(resolve, 100);
        }, animationLengthInSeconds * 1000)
    })
}

function setupAnimationInElement(id) {
    document.getElementById(id).innerHTML = `
    <svg width="100%" viewBox="0 0 5334 3000" version="1.1" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/"
        style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
        <g id="Paket-4" serif:id="Paket 4">
            <rect x="833.333" y="1145.83" width="312.5" height="312.5" style="fill:#f4c54e;" />
            <rect x="948.828" y="1145.83" width="81.51" height="92.345" style="fill:#ff9500;" />
        </g>
        <g id="Paket-3" serif:id="Paket 3">
            <rect x="416.667" y="1145.83" width="312.5" height="312.5" style="fill:#f4c54e;" />
            <rect x="532.162" y="1145.83" width="81.51" height="92.345" style="fill:#ff9500;" />
        </g>
        <g id="Paket-2" serif:id="Paket 2">
            <rect x="0" y="1145.83" width="312.5" height="312.5" style="fill:#f4c54e;" />
            <rect x="115.495" y="1145.83" width="81.51" height="92.345" style="fill:#ff9500;" />
        </g>
        <g id="Paket-1" serif:id="Paket 1">
            <rect x="1893.41" y="1145.83" width="312.5" height="312.5" style="fill:#f4c54e;" />
            <rect x="2008.91" y="1145.83" width="81.51" height="92.345" style="fill:#ff9500;" />
        </g>
        <g id="Belt">
            <rect x="329.43" y="1530.34" width="338.689" height="70.877" style="fill:#939393;" />
            <rect x="731.997" y="1526.91" width="338.689" height="70.877" style="fill:#939393;" />
            <path d="M1312.43,1584.23l-141.487,-59.501l-69.425,29.195l141.488,59.501l69.424,-29.195Z"
                style="fill:#939393;" />
            <path d="M1354.06,1698.49l0,-68.262l-81.338,0l-0,68.262l81.338,-0Z" style="fill:#939393;" />
            <path d="M1181.96,1794.73l129.603,-57.288l-73.417,-29.374l-129.603,57.288l73.417,29.374Z"
                style="fill:#939393;" />
            <rect x="-70.937" y="1536.18" width="338.689" height="70.877" style="fill:#939393;" />
            <rect x="335.714" y="1741.15" width="338.689" height="58.153" style="fill:#939393;" />
            <rect x="738.281" y="1738.34" width="338.689" height="58.153" style="fill:#939393;" />
            <rect x="-64.653" y="1745.94" width="338.689" height="58.153" style="fill:#939393;" />
        </g>
        <g id="Infoanzeige">
            <rect x="2421.75" y="933.241" width="903.478" height="714.452"
                style="fill:none;stroke:#000;stroke-width:12.5px;" />
            <g transform="matrix(6.07735,0,0,6.07735,222.974,-140.603)"><text x="369.762px" y="195.92px"
                    style="font-family:'ArialMT', 'Arial', sans-serif;font-size:12px;">Brief</text><text x="369.762px"
                    y="210.32px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:12px;">64285 Darmstadt</text>
                <text x="369.762px" y="224.72px"
                    style="font-family:'ArialMT', 'Arial', sans-serif;font-size:12px;">Deutschland</text><text
                    x="369.762px" y="239.12px"
                    style="font-family:'ArialMT', 'Arial', sans-serif;font-size:12px;">Faktor</text><text x="369.762px"
                    y="253.52px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:12px;">Faktor</text><text
                    x="369.762px" y="267.92px"
                    style="font-family:'ArialMT', 'Arial', sans-serif;font-size:12px;">Faktor</text><text x="369.762px"
                    y="282.32px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:12px;">Faktor</text>
            </g>
        </g>
        <g id="LKW-12" serif:id="LKW 12">
            <rect x="3848.62" y="219.218" width="280.889" height="197.58" style="fill:#4e8df4;" />
            <rect x="3714.94" y="423.635" width="408.295" height="32.942" style="fill:#6c6c6c;" />
            <rect x="3712.84" y="283.333" width="122.556" height="132.419" style="fill:#ababab;" />
            <path d="M3833.7,217.366l0,57.744l-118.07,0l118.07,-57.744Z" style="fill:#ababab;" />
            <circle cx="3799.75" cy="499.991" r="36.449" style="fill:#6c6c6c;" />
            <circle cx="4060.04" cy="502.475" r="36.449" style="fill:#6c6c6c;" /><text x="3908.18px" y="352.632px"
                style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:116.636px;fill:#fff;">12</text>
        </g>
        <g id="LKW-11" serif:id="LKW 11">
            <rect x="3258.38" y="115.051" width="280.889" height="197.58" style="fill:#4e8df4;" />
            <rect x="3124.7" y="319.469" width="408.295" height="32.942" style="fill:#6c6c6c;" />
            <rect x="3122.6" y="179.166" width="122.556" height="132.419" style="fill:#ababab;" />
            <path d="M3243.46,113.199l-0,57.745l-118.071,-0l118.071,-57.745Z" style="fill:#ababab;" />
            <circle cx="3209.52" cy="395.824" r="36.449" style="fill:#6c6c6c;" />
            <circle cx="3469.8" cy="398.309" r="36.449" style="fill:#6c6c6c;" /><text x="3317.95px" y="248.466px"
                style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:116.636px;fill:#fff;">11</text>
        </g>
        <g id="LKW-10" serif:id="LKW 10">
            <rect x="2621.91" y="219.218" width="280.889" height="197.58" style="fill:#4e8df4;" />
            <rect x="2488.23" y="423.635" width="408.295" height="32.942" style="fill:#6c6c6c;" />
            <rect x="2486.13" y="283.333" width="122.556" height="132.419" style="fill:#ababab;" />
            <path d="M2606.99,217.366l-0,57.744l-118.071,0l118.071,-57.744Z" style="fill:#ababab;" />
            <circle cx="2573.05" cy="499.991" r="36.449" style="fill:#6c6c6c;" />
            <circle cx="2833.33" cy="502.475" r="36.449" style="fill:#6c6c6c;" /><text x="2681.47px" y="352.632px"
                style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:116.636px;fill:#fff;">10</text>
        </g>
        <g id="LKW-20" serif:id="LKW 20">
            <rect x="2504.67" y="2198.39" width="280.889" height="197.58" style="fill:#4e8df4;" />
            <rect x="2370.99" y="2402.8" width="408.295" height="32.942" style="fill:#6c6c6c;" />
            <rect x="2368.89" y="2262.5" width="122.556" height="132.419" style="fill:#ababab;" />
            <path d="M2489.74,2196.53l0,57.745l-118.07,-0l118.07,-57.745Z" style="fill:#ababab;" />
            <circle cx="2455.8" cy="2479.16" r="36.449" style="fill:#6c6c6c;" />
            <circle cx="2716.09" cy="2481.64" r="36.449" style="fill:#6c6c6c;" /><text x="2564.23px" y="2331.8px"
                style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:116.636px;fill:#fff;">20</text>
        </g>
        <g id="LKW-13" serif:id="LKW 13">
            <rect x="4291.32" y="531.718" width="280.889" height="197.58" style="fill:#4e8df4;" />
            <rect x="4157.64" y="736.135" width="408.295" height="32.942" style="fill:#6c6c6c;" />
            <rect x="4155.54" y="595.833" width="122.556" height="132.419" style="fill:#ababab;" />
            <path d="M4276.4,529.866l-0,57.744l-118.071,0l118.071,-57.744Z" style="fill:#ababab;" />
            <circle cx="4242.45" cy="812.491" r="36.449" style="fill:#6c6c6c;" />
            <circle cx="4502.74" cy="814.975" r="36.449" style="fill:#6c6c6c;" /><text x="4350.88px" y="665.132px"
                style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:116.636px;fill:#fff;">13</text>
        </g>
        <g id="LKW-15" serif:id="LKW 15">
            <rect x="4565.51" y="1365.05" width="280.889" height="197.58" style="fill:#4e8df4;" />
            <rect x="4431.83" y="1569.47" width="408.295" height="32.942" style="fill:#6c6c6c;" />
            <rect x="4429.73" y="1429.17" width="122.556" height="132.419" style="fill:#ababab;" />
            <path d="M4550.59,1363.2l0,57.745l-118.07,-0l118.07,-57.745Z" style="fill:#ababab;" />
            <circle cx="4516.65" cy="1645.82" r="36.449" style="fill:#6c6c6c;" />
            <circle cx="4776.93" cy="1648.31" r="36.449" style="fill:#6c6c6c;" /><text x="4625.08px" y="1498.47px"
                style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:116.636px;fill:#fff;">15</text>
        </g>
        <g id="LKW-14" serif:id="LKW 14">
            <rect x="4535.61" y="948.385" width="280.889" height="197.58" style="fill:#4e8df4;" />
            <rect x="4401.93" y="1152.8" width="408.295" height="32.942" style="fill:#6c6c6c;" />
            <rect x="4399.84" y="1012.5" width="122.556" height="132.419" style="fill:#ababab;" />
            <path d="M4520.69,946.532l0,57.745l-118.07,-0l118.07,-57.745Z" style="fill:#ababab;" />
            <circle cx="4486.75" cy="1229.16" r="36.449" style="fill:#6c6c6c;" />
            <circle cx="4747.04" cy="1231.64" r="36.449" style="fill:#6c6c6c;" /><text x="4595.18px" y="1081.8px"
                style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:116.636px;fill:#fff;">14</text>
        </g>
        <g id="LKW-16" serif:id="LKW 16">
            <rect x="4459.75" y="1781.72" width="280.889" height="197.58" style="fill:#4e8df4;" />
            <rect x="4326.07" y="1986.13" width="408.295" height="32.942" style="fill:#6c6c6c;" />
            <rect x="4323.98" y="1845.83" width="122.556" height="132.419" style="fill:#ababab;" />
            <path d="M4444.83,1779.87l0,57.744l-118.07,0l118.07,-57.744Z" style="fill:#ababab;" />
            <circle cx="4410.89" cy="2062.49" r="36.449" style="fill:#6c6c6c;" />
            <circle cx="4671.18" cy="2064.97" r="36.449" style="fill:#6c6c6c;" /><text x="4519.32px" y="1915.13px"
                style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:116.636px;fill:#fff;">16</text>
        </g>
        <g id="LKW-17" serif:id="LKW 17">
            <rect x="4243.8" y="2198.41" width="280.889" height="197.58" style="fill:#4e8df4;" />
            <rect x="4110.12" y="2402.82" width="408.295" height="32.942" style="fill:#6c6c6c;" />
            <rect x="4108.02" y="2262.52" width="122.556" height="132.419" style="fill:#ababab;" />
            <path d="M4228.88,2196.55l-0,57.744l-118.071,0l118.071,-57.744Z" style="fill:#ababab;" />
            <circle cx="4194.94" cy="2479.18" r="36.449" style="fill:#6c6c6c;" />
            <circle cx="4455.23" cy="2481.66" r="36.449" style="fill:#6c6c6c;" /><text x="4303.37px" y="2331.82px"
                style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:116.636px;fill:#fff;">17</text>
        </g>
        <g id="LKW-18" serif:id="LKW 18">
            <rect x="3740.97" y="2510.89" width="280.889" height="197.58" style="fill:#4e8df4;" />
            <rect x="3607.29" y="2715.3" width="408.295" height="32.942" style="fill:#6c6c6c;" />
            <rect x="3605.19" y="2575" width="122.556" height="132.419" style="fill:#ababab;" />
            <path d="M3726.04,2509.03l-0,57.745l-118.07,-0l118.07,-57.745Z" style="fill:#ababab;" />
            <circle cx="3692.1" cy="2791.66" r="36.449" style="fill:#6c6c6c;" />
            <circle cx="3952.39" cy="2794.14" r="36.449" style="fill:#6c6c6c;" /><text x="3800.53px" y="2644.3px"
                style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:116.636px;fill:#fff;">18</text>
        </g>
        <g id="LKW-19" serif:id="LKW 19">
            <rect x="3011.76" y="2510.89" width="280.889" height="197.58" style="fill:#4e8df4;" />
            <rect x="2878.08" y="2715.3" width="408.295" height="32.942" style="fill:#6c6c6c;" />
            <rect x="2875.98" y="2575" width="122.556" height="132.419" style="fill:#ababab;" />
            <path d="M2996.84,2509.03l-0,57.745l-118.071,-0l118.071,-57.745Z" style="fill:#ababab;" />
            <circle cx="2962.89" cy="2791.66" r="36.449" style="fill:#6c6c6c;" />
            <circle cx="3223.18" cy="2794.14" r="36.449" style="fill:#6c6c6c;" /><text x="3071.32px" y="2644.3px"
                style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:116.636px;fill:#fff;">19</text>
        </g>
        <path d="M2264.12,1107.41l116.541,-157.561" style="fill:none;stroke:#000;stroke-width:12.5px;" />
        <path d="M2273.5,1471.4l101.162,142.969" style="fill:none;stroke:#000;stroke-width:12.5px;" />
    </svg>
    `;
}