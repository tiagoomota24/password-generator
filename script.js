        // Função para gerar uma senha aleatória
        function generatePassword(length) {
            const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$&";
            let password = "";
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * charset.length);
                password += charset.charAt(randomIndex);
            }
            return password;
        }

        // Atualizar a div com a senha gerada quando o botão for clicado
        document.getElementById("generate").addEventListener("click", function () {
            const password = generatePassword(8); // Altere o número para a quantidade de caracteres desejada
            document.getElementById("password").textContent = password;
        });

        // Copiar a senha para a área de transferência quando o botão "Copiar Senha" for clicado
        document.getElementById("copy").addEventListener("click", function () {
            const passwordElement = document.getElementById("password");
            const passwordText = passwordElement.textContent;

            // Criar um elemento de texto oculto para copiar a senha
            const tempInput = document.createElement("input");
            tempInput.value = passwordText;
            document.body.appendChild(tempInput);

            // Selecionar o texto no campo de entrada
            tempInput.select();
            tempInput.setSelectionRange(0, 99999); // Para dispositivos móveis

            // Copiar o texto para a área de transferência
            document.execCommand("copy");

            // Remover o campo de entrada temporário
            document.body.removeChild(tempInput);

            // Alterar a cor de fundo do botão "Copiar Senha" para verde por 3 segundos
            const copyButton = document.getElementById("copy");
            copyButton.classList.add("copied");
            copyButton.textContent = "Password Copied!";

            setTimeout(function () {
                copyButton.classList.remove("copied");
                copyButton.textContent = "Copiar Senha";
            }, 1000); // 3000 milissegundos = 3 segundos
        });