function animateAll(accounts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 20, 21, 22, 23], animationLengthInSeconds = 1) {
    // generate animations
    let animations = '';
    for (let i = 1; i < 24; i += 1) {
        if (!document.getElementById(`LKW-${i}`)) {
            continue;
        }

        const truck = document.getElementById(`LKW-${i}`).children[0];
        const truckX = (truck.attributes['x'] ?? truck.attributes['cx']).nodeValue;
        const truckY = (truck.attributes['y'] ?? truck.attributes['cy']).nodeValue;

        i == 20 && console.log(truck, truck.attributes['y'], truck.attributes['y'].nodeValue, truckY);

        const translate = `translate(${(truckX - 1939.81).toFixed(2)}px, ${(truckY - 1366.71).toFixed(2)}px);`

        animations += `
        @keyframes moveParcelTo${i} {
            0% {
                transform: translateX(0);
                opacity: 1;
            }

            80% {
                transform: ${translate}
                opacity: 1;
            }

            100% {
                transform: ${translate}
                opacity: 0;
            }
        }
        `;
    }

    console.log(animations);

    for (let i = 0; i < accounts.length; i++) {
        const wait = i * (animationLengthInSeconds * 1100);
        setTimeout(() => toggleAnimation(accounts[i], animationLengthInSeconds), wait);
    }
}

function toggleAnimation(to, successful, nextTest = null, animationLengthInSeconds = 1) {
    return new Promise(resolve => {
        const singleAnimationLength = animationLengthInSeconds * 7 / 8;
        const timeoutLength = singleAnimationLength * 1000;

        document.getElementById("animationSvg").style.animation = `${successful ? '': 'in'}correctAssignment ${singleAnimationLength}s ease-in-out`;
        document.getElementById("Paket-1").style.animation = `moveParcelTo${to} ${singleAnimationLength}s ease-in-out`;
        document.getElementById("Infoanzeige").style.animation = `hideInformation ${singleAnimationLength/2}s ease-in-out forwards`;
        document.getElementById("Paket-4").style.animation = `makeMainParcel ${singleAnimationLength}s ease-in-out`;
        document.getElementById("Paket-3").style.animation = `moveForward ${singleAnimationLength}s ease-in-out`;
        document.getElementById("Paket-2").style.animation = `moveForward ${singleAnimationLength}s ease-in-out`;

        setTimeout(() => {
            document.getElementById("Infoanzeige").style.animation = `hideInformation ${singleAnimationLength/2}s ease-in-out reverse`;
        }, timeoutLength / 2 + 20)

        setTimeout(() => {
            document.getElementById("animationSvg").style.animation = "";
            document.getElementById("Paket-1").style.animation = "";
            document.getElementById("Paket-2").style.animation = "";
            document.getElementById("Paket-3").style.animation = "";
            document.getElementById("Paket-4").style.animation = "";
            document.getElementById("Infoanzeige").style.animation = "";

            setTimeout(resolve, 100);
        }, animationLengthInSeconds * 1000);

        setTimeout(() => {
            if (nextTest) {
                setTest(nextTest);
            }
        }, singleAnimationLength * 1000);
    })
}

function setupAnimationInElement(id) {
    document.getElementById(id).innerHTML = `
    <svg id="animationSvg" width="100%" height="100%" viewBox="0 0 6584 3000" version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"
        xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
        <g id="Paket-4" serif:id="Paket 4">
            <rect x="880.977" y="1170.87" width="312.5" height="312.5" style="fill:#f4c54e;"/>
            <rect x="996.472" y="1170.87" width="81.51" height="92.345" style="fill:#ff9500;"/>
        </g>
        <g id="Paket-3" serif:id="Paket 3">
            <rect x="464.311" y="1170.87" width="312.5" height="312.5" style="fill:#f4c54e;"/>
            <rect x="579.806" y="1170.87" width="81.51" height="92.345" style="fill:#ff9500;"/>
        </g>
        <g id="Paket-2" serif:id="Paket 2">
            <rect x="47.644" y="1170.87" width="312.5" height="312.5" style="fill:#f4c54e;"/>
            <rect x="163.139" y="1170.87" width="81.51" height="92.345" style="fill:#ff9500;"/>
        </g>
        <g id="Belt">
            <rect x="377.074" y="1555.38" width="338.689" height="70.877" style="fill:#939393;"/>
            <rect x="779.641" y="1551.95" width="338.689" height="70.877" style="fill:#939393;"/>
            <path d="M1360.08,1609.26l-141.487,-59.501l-69.425,29.195l141.488,59.501l69.424,-29.195Z" style="fill:#939393;"/>
            <path d="M1401.7,1723.53l0,-68.261l-81.338,0l-0,68.261l81.338,0Z" style="fill:#939393;"/>
            <path d="M1229.61,1819.76l129.603,-57.287l-73.417,-29.374l-129.603,57.288l73.417,29.373Z" style="fill:#939393;"/>
            <rect x="-23.293" y="1561.22" width="338.689" height="70.877" style="fill:#939393;"/>
            <rect x="383.358" y="1766.19" width="338.689" height="58.153" style="fill:#939393;"/>
            <rect x="785.925" y="1763.38" width="338.689" height="58.153" style="fill:#939393;"/>
            <rect x="-17.009" y="1770.98" width="338.689" height="58.153" style="fill:#939393;"/>
        </g>
        <g id="Infoanzeige">
            <rect x="2468.97" y="1141.46" width="900" height="712.5" style="fill:none;stroke:#000;stroke-width:12.5px;"/>
            <g transform="matrix(6.10122,0,0,6.07735,260.22,66.467)">
                <text id="parcelType" x="369.762px" y="195.92px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:12px;">Brief</text>
                <text id="city" x="369.762px" y="210.32px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:12px;">64285 Darmstadt</text>
                <text id="country" x="369.762px" y="224.72px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:12px;">Deutschland</text>
                <text id="weight" x="369.762px" y="239.12px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:12px;">Faktor</text>
                <text id="express" x="369.762px" y="253.52px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:12px;">Faktor</text>
                <text id="dangerous" x="369.762px" y="267.92px" style="font-family:'ArialMT', 'Arial', sans-serif;font-size:12px;">Faktor</text>
            </g>
        </g>
        <g id="LKW-3" serif:id="LKW 3">
            <rect x="3619.07" y="214.318" width="280.889" height="197.135" style="fill:#4e8df4;"/>
            <rect x="3485.39" y="418.275" width="408.295" height="32.867" style="fill:#6c6c6c;"/>
            <rect x="3483.3" y="278.288" width="122.556" height="132.12" style="fill:#ababab;"/>
            <path d="M3604.15,212.47l0,57.614l-118.07,0l118.07,-57.614Z" style="fill:#ababab;"/>
            <ellipse cx="3570.21" cy="494.458" rx="36.449" ry="36.367" style="fill:#6c6c6c;"/>
            <ellipse cx="3830.5" cy="496.937" rx="36.449" ry="36.367" style="fill:#6c6c6c;"/>
            <g transform="matrix(1,0,0,0.997745,4.54747e-13,-3.37016)">
                <text x="3727.4px" y="351.594px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:116.636px;fill:#fff;">3</text>
            </g>
        </g>
        <g id="LKW-2" serif:id="LKW 2">
            <rect x="2951.14" y="214.318" width="280.889" height="197.135" style="fill:#4e8df4;"/>
            <rect x="2817.46" y="418.275" width="408.295" height="32.867" style="fill:#6c6c6c;"/>
            <rect x="2815.36" y="278.288" width="122.556" height="132.12" style="fill:#ababab;"/>
            <path d="M2936.22,212.47l-0,57.614l-118.071,0l118.071,-57.614Z" style="fill:#ababab;"/>
            <ellipse cx="2902.28" cy="494.458" rx="36.449" ry="36.367" style="fill:#6c6c6c;"/>
            <ellipse cx="3162.56" cy="496.937" rx="36.449" ry="36.367" style="fill:#6c6c6c;"/>
            <g transform="matrix(1,0,0,0.997745,0,-3.37016)">
                <text x="3060.63px" y="351.594px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:116.636px;fill:#fff;">2</text>
            </g>
        </g>
        <g id="LKW-1" serif:id="LKW 1">
            <rect x="2283.2" y="214.318" width="280.889" height="197.135" style="fill:#4e8df4;"/>
            <rect x="2149.53" y="418.275" width="408.295" height="32.867" style="fill:#6c6c6c;"/>
            <rect x="2147.43" y="278.288" width="122.556" height="132.12" style="fill:#ababab;"/>
            <path d="M2268.28,212.47l0,57.614l-118.07,0l118.07,-57.614Z" style="fill:#ababab;"/>
            <ellipse cx="2234.34" cy="494.458" rx="36.449" ry="36.367" style="fill:#6c6c6c;"/>
            <ellipse cx="2494.63" cy="496.937" rx="36.449" ry="36.367" style="fill:#6c6c6c;"/>
            <g transform="matrix(1,0,0,0.997745,0,-3.37016)">
                <text x="2396.09px" y="351.594px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:116.636px;fill:#fff;">1</text>
            </g>
        </g>
        <g id="LKW-11" serif:id="LKW 11">
            <rect x="4943.73" y="2416.09" width="280.889" height="197.135" style="fill:#4e8df4;"/>
            <rect x="4810.05" y="2620.04" width="408.295" height="32.867" style="fill:#6c6c6c;"/>
            <rect x="4807.95" y="2480.06" width="122.556" height="132.12" style="fill:#ababab;"/>
            <path d="M4928.81,2414.24l0,57.615l-118.07,-0l118.07,-57.615Z" style="fill:#ababab;"/>
            <ellipse cx="4894.87" cy="2696.23" rx="36.449" ry="36.367" style="fill:#6c6c6c;"/>
            <ellipse cx="5155.15" cy="2698.7" rx="36.449" ry="36.367" style="fill:#6c6c6c;"/>
            <g transform="matrix(1,0,0,0.997745,0,1.59423)">
                <text x="5027.4px" y="2553.36px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:116.636px;fill:#fff;">11</text>
            </g>
        </g>
        <g id="LKW-12" serif:id="LKW 12">
            <rect x="4280.8" y="2416.09" width="280.889" height="197.135" style="fill:#4e8df4;"/>
            <rect x="4147.12" y="2620.04" width="408.295" height="32.867" style="fill:#6c6c6c;"/>
            <rect x="4145.02" y="2480.06" width="122.556" height="132.12" style="fill:#ababab;"/>
            <path d="M4265.88,2414.24l0,57.615l-118.07,-0l118.07,-57.615Z" style="fill:#ababab;"/>
            <ellipse cx="4231.94" cy="2696.23" rx="36.449" ry="36.367" style="fill:#6c6c6c;"/>
            <ellipse cx="4492.22" cy="2698.7" rx="36.449" ry="36.367" style="fill:#6c6c6c;"/>
            <g transform="matrix(1,0,0,0.997745,0,1.59423)">
                <text x="4354.7px" y="2553.36px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:116.636px;fill:#fff;">12</text>
            </g>
        </g>
        <g id="LKW-13" serif:id="LKW 13">
            <rect x="3617.87" y="2416.09" width="280.889" height="197.135" style="fill:#4e8df4;"/>
            <rect x="3484.19" y="2620.04" width="408.295" height="32.867" style="fill:#6c6c6c;"/>
            <rect x="3482.09" y="2480.06" width="122.556" height="132.12" style="fill:#ababab;"/>
            <path d="M3602.95,2414.24l0,57.615l-118.07,-0l118.07,-57.615Z" style="fill:#ababab;"/>
            <ellipse cx="3569.01" cy="2696.23" rx="36.449" ry="36.367" style="fill:#6c6c6c;"/>
            <ellipse cx="3829.29" cy="2698.7" rx="36.449" ry="36.367" style="fill:#6c6c6c;"/>
            <g transform="matrix(1,0,0,0.997745,0,1.59423)">
                <text x="3691.34px" y="2553.36px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:116.636px;fill:#fff;">13</text>
            </g>
        </g>
        <g id="LKW-22" serif:id="LKW 22">
            <rect x="2954.94" y="2416.09" width="280.889" height="197.135" style="fill:#4e8df4;"/>
            <rect x="2821.26" y="2620.04" width="408.295" height="32.867" style="fill:#6c6c6c;"/>
            <rect x="2819.16" y="2480.06" width="122.556" height="132.12" style="fill:#ababab;"/>
            <path d="M2940.02,2414.24l0,57.615l-118.07,-0l118.07,-57.615Z" style="fill:#ababab;"/>
            <ellipse cx="2906.08" cy="2696.23" rx="36.449" ry="36.367" style="fill:#6c6c6c;"/>
            <ellipse cx="3166.36" cy="2698.7" rx="36.449" ry="36.367" style="fill:#6c6c6c;"/>
            <g transform="matrix(1,0,0,0.997745,0,1.59423)">
                <text x="3032px" y="2553.36px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:116.636px;fill:#fff;">22</text>
            </g>
        </g>
        <g id="LKW-23" serif:id="LKW 23">
            <rect x="2292.01" y="2416.09" width="280.889" height="197.135" style="fill:#4e8df4;"/>
            <rect x="2158.33" y="2620.04" width="408.295" height="32.867" style="fill:#6c6c6c;"/>
            <rect x="2156.23" y="2480.06" width="122.556" height="132.12" style="fill:#ababab;"/>
            <path d="M2277.09,2414.24l0,57.615l-118.07,-0l118.07,-57.615Z" style="fill:#ababab;"/>
            <ellipse cx="2243.15" cy="2696.23" rx="36.449" ry="36.367" style="fill:#6c6c6c;"/>
            <ellipse cx="2503.43" cy="2698.7" rx="36.449" ry="36.367" style="fill:#6c6c6c;"/>
            <g transform="matrix(1,0,0,0.997745,-2.27374e-13,1.59423)">
                <text x="2368.64px" y="2553.36px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:116.636px;fill:#fff;">23</text>
            </g>
        </g>
        <g id="LKW-4" serif:id="LKW 4">
            <rect x="4287.01" y="214.318" width="280.889" height="197.135" style="fill:#4e8df4;"/>
            <rect x="4153.33" y="418.275" width="408.295" height="32.867" style="fill:#6c6c6c;"/>
            <rect x="4151.23" y="278.288" width="122.556" height="132.12" style="fill:#ababab;"/>
            <path d="M4272.09,212.47l-0,57.614l-118.071,0l118.071,-57.614Z" style="fill:#ababab;"/>
            <ellipse cx="4238.15" cy="494.458" rx="36.449" ry="36.367" style="fill:#6c6c6c;"/>
            <ellipse cx="4498.43" cy="496.937" rx="36.449" ry="36.367" style="fill:#6c6c6c;"/>
            <g transform="matrix(1,0,0,0.997745,0,-3.37016)">
                <text x="4395.28px" y="351.594px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:116.636px;fill:#fff;">4</text>
            </g>
        </g>
        <g id="LKW-6" serif:id="LKW 6">
            <rect x="5588.69" y="387.244" width="280.889" height="197.135" style="fill:#4e8df4;"/>
            <rect x="5455.02" y="591.2" width="408.295" height="32.867" style="fill:#6c6c6c;"/>
            <rect x="5452.92" y="451.214" width="122.556" height="132.12" style="fill:#ababab;"/>
            <path d="M5573.77,385.396l-0,57.614l-118.071,0l118.071,-57.614Z" style="fill:#ababab;"/>
            <ellipse cx="5539.83" cy="667.384" rx="36.449" ry="36.367" style="fill:#6c6c6c;"/>
            <ellipse cx="5800.12" cy="669.863" rx="36.449" ry="36.367" style="fill:#6c6c6c;"/>
            <g transform="matrix(1,0,0,0.997745,0,-2.98026)">
                <text x="5696.31px" y="524.52px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:116.636px;fill:#fff;">6</text>
            </g>
        </g>
        <g id="LKW-5" serif:id="LKW 5">
            <rect x="4954.94" y="214.318" width="280.889" height="197.135" style="fill:#4e8df4;"/>
            <rect x="4821.26" y="418.275" width="408.295" height="32.867" style="fill:#6c6c6c;"/>
            <rect x="4819.17" y="278.288" width="122.556" height="132.12" style="fill:#ababab;"/>
            <path d="M4940.02,212.47l0,57.614l-118.07,0l118.07,-57.614Z" style="fill:#ababab;"/>
            <ellipse cx="4906.08" cy="494.458" rx="36.449" ry="36.367" style="fill:#6c6c6c;"/>
            <ellipse cx="5166.37" cy="496.937" rx="36.449" ry="36.367" style="fill:#6c6c6c;"/>
            <g transform="matrix(1,0,0,0.997745,0,-3.37016)">
                <text x="5062.13px" y="351.594px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:116.636px;fill:#fff;">5</text>
            </g>
        </g>
        <g id="LKW-7" serif:id="LKW 7">
            <rect x="5925.95" y="826.174" width="280.889" height="197.135" style="fill:#4e8df4;"/>
            <rect x="5792.27" y="1030.13" width="408.295" height="32.867" style="fill:#6c6c6c;"/>
            <rect x="5790.17" y="890.144" width="122.556" height="132.12" style="fill:#ababab;"/>
            <path d="M5911.03,824.326l-0,57.614l-118.071,0l118.071,-57.614Z" style="fill:#ababab;"/>
            <ellipse cx="5877.08" cy="1106.31" rx="36.449" ry="36.367" style="fill:#6c6c6c;"/>
            <ellipse cx="6137.37" cy="1108.79" rx="36.449" ry="36.367" style="fill:#6c6c6c;"/>
            <g transform="matrix(1,0,0,0.997745,0,-1.99059)">
                <text x="6034.07px" y="963.451px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:116.636px;fill:#fff;">7</text>
            </g>
        </g>
        <g id="LKW-8" serif:id="LKW 8">
            <rect x="6134.28" y="1341.43" width="280.889" height="197.135" style="fill:#4e8df4;"/>
            <rect x="6000.6" y="1545.39" width="408.295" height="32.867" style="fill:#6c6c6c;"/>
            <rect x="5998.5" y="1405.4" width="122.556" height="132.12" style="fill:#ababab;"/>
            <path d="M6119.36,1339.58l0,57.615l-118.07,-0l118.07,-57.615Z" style="fill:#ababab;"/>
            <ellipse cx="6085.42" cy="1621.57" rx="36.449" ry="36.367" style="fill:#6c6c6c;"/>
            <ellipse cx="6345.7" cy="1624.05" rx="36.449" ry="36.367" style="fill:#6c6c6c;"/>
            <g transform="matrix(1,0,0,0.997745,0,-0.828823)">
                <text x="6242.55px" y="1478.71px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:116.636px;fill:#fff;">8</text>
            </g>
        </g>
        <g id="LKW-9" serif:id="LKW 9">
            <rect x="5925.95" y="1822.95" width="280.889" height="197.135" style="fill:#4e8df4;"/>
            <rect x="5792.27" y="2026.91" width="408.295" height="32.867" style="fill:#6c6c6c;"/>
            <rect x="5790.17" y="1886.92" width="122.556" height="132.12" style="fill:#ababab;"/>
            <path d="M5911.03,1821.11l-0,57.614l-118.071,0l118.071,-57.614Z" style="fill:#ababab;"/>
            <ellipse cx="5877.08" cy="2103.09" rx="36.449" ry="36.367" style="fill:#6c6c6c;"/>
            <ellipse cx="6137.37" cy="2105.57" rx="36.449" ry="36.367" style="fill:#6c6c6c;"/>
            <g transform="matrix(1,0,0,0.997745,0,0.256879)">
                <text x="6034.81px" y="1960.23px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:116.636px;fill:#fff;">9</text>
            </g>
        </g>
        <g id="LKW-10" serif:id="LKW 10">
            <rect x="5588.69" y="2274.34" width="280.889" height="197.135" style="fill:#4e8df4;"/>
            <rect x="5455.02" y="2478.3" width="408.295" height="32.867" style="fill:#6c6c6c;"/>
            <rect x="5452.92" y="2338.31" width="122.556" height="132.12" style="fill:#ababab;"/>
            <path d="M5573.77,2272.49l-0,57.614l-118.071,0l118.071,-57.614Z" style="fill:#ababab;"/>
            <ellipse cx="5539.83" cy="2554.48" rx="36.449" ry="36.367" style="fill:#6c6c6c;"/>
            <ellipse cx="5800.12" cy="2556.96" rx="36.449" ry="36.367" style="fill:#6c6c6c;"/>
            <g transform="matrix(1,0,0,0.997745,0,1.27463)">
                <text x="5662.53px" y="2411.61px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:116.636px;fill:#fff;">10</text>
            </g>
        </g>
        <path d="M2310.64,1312.38l116.542,-158.333" style="fill:none;stroke:#000;stroke-width:12.5px;"/>
        <path d="M2321.64,1679.62l101.162,142.97" style="fill:none;stroke:#000;stroke-width:12.5px;"/>
        <g id="LKW-20" serif:id="LKW 20">
            <text x="880.977px" y="2626.46px" style="font-family:'AppleColorEmoji', 'Apple Color Emoji';font-size:305.578px;">🔙</text>
        </g>
        <g id="LKW-21" serif:id="LKW 21">
            <ellipse cx="1089.68" cy="385.396" rx="159.767" ry="156.481" style="fill:none;stroke:#f00;stroke-width:33.33px;"/>
            <text x="980.985px" y="415.428px" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:83.911px;">ZOLL</text>
        </g>
        <g id="Paket-1" serif:id="Paket 1">
            <rect x="1939.81" y="1366.71" width="312.5" height="299.837" style="fill:#f4c54e;"/>
            <rect x="2055.3" y="1366.71" width="81.51" height="88.603" style="fill:#ff9500;"/>
            <text id="expectedAccount" x="2039.81px" y="1566.71" style="font-family:'Arial-BoldMT', 'Arial', sans-serif;font-weight:700;font-size:83.911px;fill:white;">1</text>
        </g>
    </svg>`;
}