 <!-- script javascript -->
    <script>
        var stc = document.getElementById("modal_stok").value
        if (stc == "") {
            document.getElementById("simpan1").style.display = "inline"
            document.getElementById("simpan2").style.display = "none"
        }

        var namaproduk = []
        var hargaproduk = []
        var satuan = []
        var kategori = []
        var gambar = []
        var stok = []

        var tampil = document.getElementById('tampildata')

        function showData() {
            tampil.innerHTML = ""

            for (i = 0; i < namaproduk.length; i++) {
                nodata = i + 1
                tampil.innerHTML += "<tr>" +
                    "<th>" + nodata + "</th>" +
                    "<td>" + "KD" + Date.now() + "</td>" +
                    "<td>" + namaproduk[i] + "</td>" +
                    "<td>" + hargaproduk[i] + "</td>" +
                    "<td>" + satuan[i] + "</td>" +
                    "<td>" + kategori[i] + "</td>" +
                    "<td><img src=" + gambar[i] + "></td>" +
                    "<td id='stockshow" + nodata + "'>" + stok[i] + "</td>" +
                    "<td>" +
                    "<button class='btn btn-warning' style='margin-right: 10px' onclick='editdata(" +
                    i + ")'>Edit</button>" +
                    "<button class='btn btn-danger' onclick='hapus(" + i + ")'>Hapus</button>" +
                    "</td>" +
                    "</tr>"
                var stocks = document.getElementById('stockshow' + nodata + '')
                if (Number(stocks.innerHTML) < 5) {
                    stocks.style.backgroundColor = "#e74c3c"
                    stocks.style.color = "#fff"
                } else {
                    stocks.style.backgroundColor = ""
                    stocks.style.color = ""
                }
            }
        }



        function add() {
            var namabaru = document.getElementById('modal_nama').value
            var hargabaru = document.getElementById('modal_harga').value
            var satuanbaru = document.getElementById('modal_satuan').value
            var kategoribaru = document.getElementById('modal_kategori').value
            var gambarbaru = document.getElementById('modal_gambar').value
            var stokbaru = document.getElementById('modal_stok').value

            namaproduk.push(namabaru)
            hargaproduk.push(hargabaru)
            satuan.push(satuanbaru)
            kategori.push(kategoribaru)
            gambar.push(gambarbaru)
            stok.push(stokbaru)
            document.getElementById('modal_nama').value = ""
            document.getElementById('modal_harga').value = ""
            document.getElementById('modal_satuan').value = ""
            document.getElementById('modal_kategori').value = ""
            document.getElementById('modal_gambar').value = ""
            document.getElementById('modal_stok').value = ""
            showData()
        }

        function hapus(i) {
            namaproduk.splice(i, 1);
            hargaproduk.splice(i, 1);
            satuan.splice(i, 1);
            kategori.splice(i, 1);
            gambar.splice(i, 1);
            stok.splice(i, 1);

            showData()
        }


        var index = []

        function editdata(i) {
            document.getElementById('modal_nama').value = namaproduk[i]
            document.getElementById('modal_harga').value = hargaproduk[i]
            document.getElementById('modal_satuan').value = satuan[i]
            document.getElementById('modal_kategori').value = kategori[i]
            document.getElementById('modal_gambar').value = gambar[i]
            document.getElementById('modal_stok').value = stok[i]
            document.getElementById("simpan1").style.display = "none"
            document.getElementById("simpan2").style.display = "inline"
            index.push(i)
        }


        function datasimpan() {
            var simpannama = document.getElementById('modal_nama').value
            var simpanharga = document.getElementById('modal_harga').value
            var simpansatuan = document.getElementById('modal_satuan').value
            var simpankategori = document.getElementById('modal_kategori').value
            var simpangambar = document.getElementById('modal_gambar').value
            var simpanstok = document.getElementById('modal_stok').value

            namaproduk[index] = simpannama
            hargaproduk[index] = simpanharga
            satuan[index] = simpansatuan
            kategori[index] = simpankategori
            gambar[index] = simpangambar
            gambar[index] = simpangambar
            stok[index] = simpanstok
            document.getElementById('modal_nama').value = ""
            document.getElementById('modal_harga').value = ""
            document.getElementById('modal_satuan').value = ""
            document.getElementById('modal_kategori').value = ""
            document.getElementById('modal_gambar').value = ""
            document.getElementById('modal_stok').value = ""
            document.getElementById("simpan1").style.display = "inline"
            document.getElementById("simpan2").style.display = "none"

            showData()
            index.pop()
        }
    </script>
