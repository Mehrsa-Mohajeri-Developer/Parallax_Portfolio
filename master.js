let h2 = document.querySelectorAll("main>h2")
        document.getElementsByTagName("main")[0].addEventListener("scroll", (e) => {
            let st = e.target.scrollTop
            h2[0].style.bottom = -(st / 3) + 'px'
            h2[1].style.top = -(st / 3) + 'px'
            h2[2].style.bottom = -(st / 3) + 'px'

            document.getElementById('pic').style.left = -(st) + 'px'
            if (st > 300 && st < 520) {
                document.querySelector('figure>img').src = "Images/portfolio1.png"
            }
            else if (st > 521 && st < 741) {
                document.querySelector('figure>img').src = "Images/portfolio2.webp"
            }
            else if (st > 742 && st < 962) {
                document.querySelector('figure>img').src = "Images/portfolio3.webp"
            }
            else if (st > 963 && st < 1183) {
                document.querySelector('figure>img').src = "Images/portfolio4.webp"
            }
            else if (st > 1184 && st < 1404) {
                document.querySelector('figure>img').src = "Images/portfolio5.webp"
            }
        })