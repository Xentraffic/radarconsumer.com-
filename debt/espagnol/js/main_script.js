<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Organización de Beneficencia</title>
    <link rel="shortcut icon" href="./images/profile.png" type="image/x-icon">
    <link rel="stylesheet" href="./css/style.css">
    <script src='https://b-js.ringba.com/CA59753f37379847698236cf6ac2539021' async></script>
    <script>
        !function (f, b, e, v, n, t, s) {
            if (f.fbq) return; n = f.fbq = function () {
                n.callMethod ?
                    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };
            if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
            n.queue = []; t = b.createElement(e); t.async = !0;
            t.src = v; s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s)
        }(window, document, 'script',
            'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '2255484874853072');
        fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none" src="" /></noscript>
</head>

<body cz-shortcut-listen="true">

    <main class="min-h-screen">
        <div style="background-color: #1977f2;">
            <div class="max-w-4xl mx-auto bg-white text-center text-gray-600">
                <div class="p-4">
                    <p class="font-sans-serif text-md sm:text-lg font-bold mt-2">
                        <span class="text-red-600"
                            style="background-color: #fff; padding: 5px; border-radius: 3px;">Advertencia:</span>
                        Se cierra la inscripción
                        <span id="currentDate">11/07/2023</span> a la medianoche.
                    </p>
                    <h2 class="font-bold text-xl sm:text-3xl mt-1">Elimina $15,000 o más en deuda de tarjetas de crédito. Borra miles en deudas y intereses.</h2>
                </div>
                <div class="w-full md:col-span-1 text-center block">
                    <div class=" text-sm flex items-center justify-center">
                        <span class="relative flex h-4 w-4 inline-flex mr-2">
                            <span
                                class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-green-500"></span>
                            <span class="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                        </span> Sofía está en línea.
                    </div>
                </div>
            </div>
        </div>
        <div class="max-w-md mx-auto bg-white">
            <div class="p-4">
                <div class="space-y-4">
                    <div class="chat-container pb-2">
                        <!-- Agent message -->
                        <div id="agentBlock1" class="flex items-end w-5/6">
                            <div class="flex-shrink-0">
                                <img class="w-8 h-8 rounded-full" src="images/agent.webp" alt="Sender Avatar">
                            </div>
                            <div class="ml-3 agent-chat">
                                <div id="initTyping" class="bg-gray-200 p-3 rounded-lg shadow-xs mt-2 inline-block">
                                    <div class="typing-animation">
                                        <div class="typing-dot"></div>
                                        <div class="typing-dot"></div>
                                        <div class="typing-dot"></div>
                                    </div>
                                </div>
                                <div id="msg1" class="bg-gray-200 p-3 rounded-lg shadow-xs mt-2 w-fit hidden">
                                    <p class="text-md text-gray-800">Hola 👋</p>
                                </div>
                                <div id="msg2" class="bg-gray-200 p-3 rounded-lg shadow-xs mt-2 w-fit hidden">
                                    <p class="text-md text-gray-800">Soy Sofía del Equipo de Alivio de la Deuda.</p>
                                </div>
                                <div id="msg3" class="bg-gray-200 p-3 rounded-lg shadow-xs mt-2 w-fit hidden">
                                    <p class="text-md text-gray-800">¿Te gustaría saber si calificas para el alivio de tus deudas? Toca ¡Sí! 😃</p>
                                </div>
                                <div id="msg4" class="bg-gray-200 p-3 rounded-lg shadow-xs mt-2 w-fit hidden">
                                    <div>
                                        <button
                                            class="chat-button text-white font-bold bg-blue-500 rounded-full py-3 px-12"
                                            type="button" data-form-step="1" data-form-value="Yes">Sí</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- User message -->
                        <div id="userBlock1" class="flex items-start justify-end pt-4 hidden">
                            <div class="mr-3 receiver-chat">
                                <div class="bg-blue-500 text-white p-3 rounded-lg shadow-xs mt-2 inline-block">
                                    <p class="text-md">Sí</p>
                                </div>
                            </div>
                            <div class="flex-shrink-0">
                                <img class="w-8 h-8 rounded-full" src="images/profile.png" alt="Receiver Avatar">
                            </div>
                        </div>
                        <!-- Agent message -->
                        <div id="agentBlock2" class="flex items-end w-5/6 hidden pt-4">
                            <div class="flex-shrink-0">
                                <img class="w-8 h-8 rounded-full" src="images/agent.webp" alt="Sender Avatar">
                            </div>
                            <div class="ml-3 agent-chat">
                                <div id="msg6" class="bg-gray-200 p-3 rounded-lg shadow-xs mt-2 w-fit hidden">
                                    <p class="text-md text-gray-800">Perfecto, déjame hacerte dos preguntas rápidas...</p>
                                </div>
                                <div id="msg7" class="bg-gray-200 p-3 rounded-lg shadow-xs mt-2 w-fit hidden">
                                    <p class="text-md text-gray-800">¿Tiene más de $15,000 en deuda? Toca Sí o No.</p>
                                </div>
                                <div id="msg8" class="bg-gray-200 p-3 rounded-lg shadow-xs mt-2 w-fit hidden">
                                    <div class="grid grid-rows-1 grid-cols-2 gap-x-3">
                                        <button
                                            class="chat-button text-white font-bold bg-blue-500 rounded-full py-3 px-8"
                                            style="background-color: green;" type="button" data-form-step="2"
                                            data-form-value="Yes">Sí</button>
                                        <button
                                            class="chat-button text-white font-bold bg-blue-500 rounded-full py-3 px-8"
                                            style="background-color: crimson;" 
                                            type="button" 
                                            data-form-step="2"
                                            data-form-value="No" 
                                            onclick="
                                                document.getElementById('msg13').classList.add('hidden');
                                                document.getElementById('msg14').classList.add('hidden');
                                                document.getElementById('msg17').classList.add('hidden');
                                                document.getElementById('msg18').classList.remove('hidden');
                                                document.getElementById('msg19').classList.remove('hidden')
                                            ">No</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- User message -->
                        <div id="userBlock2" class="flex items-start justify-end hidden">
                            <div class="mr-3 receiver-chat">
                                <div class="bg-blue-500 text-white p-3 rounded-lg shadow-xs mt-2 inline-block">
                                    <p id="msg9yes" class="text-md hidden">Sí</p>
                                    <p id="msg9no" class="text-md hidden">No</p>
                                </div>
                            </div>
                            <div class="flex-shrink-0">
                                <img class="w-8 h-8 rounded-full" src="images/profile.png" alt="Receiver Avatar">
                            </div>
                        </div>
                        <!-- Agent message -->
                        <div id="agentBlock3" class="flex items-end w-5/6 hidden pt-4">
                            <div class="flex-shrink-0">
                                <img class="w-8 h-8 rounded-full" src="images/agent.webp" alt="Sender Avatar">
                            </div>
                            <div class="ml-3 agent-chat">
                                <div id="
<script>
(function () {
    let customers = [
        'Mateo Garcia', 'Lucia Torres', 'Santiago Rodriguez', 'Elena Ramirez', 
        'Diego Perez', 'Camila Lopez', 'Alejandro Sanchez', 'Daniel Ramirez', 
        'Isabella Rivera', 'Jose Flores', 'Valeria Gonzalez', 'Gabriela Hernandez', 
        'Carlos Ortiz', 'Mariana Alvarez', 'Miguel Jimenez', 'Daniela Vasquez', 
        'Carmen Ruiz', 'Ana Diaz'
    ];
    let approvedAmounts = [];
    let oAvatar = $("#social-proof-avatar");
    let oCustomer = $("#social-proof-customer");
    let oInformation = $("#social-proof-customer-info");
    let oContainer = $("#custom-social-proof");

    // Generate random approval amounts
    for (let customer of customers) {
        approvedAmounts.push(Math.floor(Math.random() * (46400 - 15000 + 1)) + 15000);
    }

    function updateSocial() {
        let index = Math.floor(Math.random() * customers.length);
        let customer = customers[index];
        let approved = approvedAmounts[index];
        let avatar = customer.split(" ")[0];

        oAvatar.attr("src", "images/" + avatar.toLowerCase() + ".jpg");
        oCustomer.html(customer);
        oInformation.html("Acabo de eliminar $" + approved + " en deudas");
    }

    setInterval(function () {
        if (oContainer.is(':hidden')) {
            oContainer.stop().slideToggle('slow');
            updateSocial();
        } else {
            oContainer.stop().slideToggle('slow');
        }
    }, 6500);
})();
</script>