const getElementById('list')







function menunnavbar() {
            if (document.getElementById('list').style.display == 'block') {
                document.getElementById('list').style.display = 'none';
            }
            else {
                document.getElementById('list').style.display = 'block'
            }
        }
        document.getElementById('st').addEventListener('click', menunnavbar)

        function medidaschange() {
            if (document.getElementById('medida1').style.display == 'block'){
                            document.getElementById('medida1').style.display = 'none'
                        }
                            else {
                            document.getElementById('medida1').style.display = 'block'
                            document.getElementById('medida2').style.display = 'none'
                            document.getElementById('medida3').style.display = 'none'
                        }
        } document.getElementById('med1').addEventListener('click', medidaschange)

        function medidaschange2() {
            if (document.getElementById('medida2').style.display == 'block') {
                    document.getElementById('medida2').style.display = 'none'
                }
                else {
                    document.getElementById('medida2').style.display = 'block'
                    document.getElementById('medida1').style.display = 'none'
                    document.getElementById('medida3').style.display = 'none'
                }
            } document.getElementById('med2').addEventListener('click', medidaschange2)

            function medidaschange3() {
            if (document.getElementById('medida3').style.display == 'block') {
                        document.getElementById('medida3').style.display = 'none'
                    }
                    else {
                        document.getElementById('medida3').style.display = 'block'
                        document.getElementById('medida1').style.display = 'none'
                        document.getElementById('medida2').style.display = 'none'
                    }
                } document.getElementById('med3').addEventListener('click', medidaschange3)
