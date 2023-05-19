# Proje 1
[22,27,16,2,18,6] -> Insertion Sort

Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.

Big-O gösterimini yazınız.

Time Complexity: Dizi sıralandıktan sonra 18 sayısı aşağıdaki case'lerden hangisinin kapsamına girer? Yazınız

Average case: Aradığımız sayının ortada olması
Worst case: Aradığımız sayının sonda olması
Best case: Aradığımız sayının dizinin en başında olması.
.



[7,3,5,8,2,9,4,15,6] dizisinin Selection Sort'a göre ilk 4 adımını yazınız.


# Proje 1 Çözümü
### Soru 1: Verilen dizinin sort türüne göre aşamalarını yazınız.
Insertion Sort, sıralama algoritmalarından biridir ve temel olarak bir diziyi küçükten büyüğe doğru sıralamak için kullanılır. Programlaması basittir ancak quick sort ve merge sort algoritmalarına göre nispeten yavaş çalışır.

İlk adımda (pass) sadece 22 sayısı sıralanmış oluyor yani hiçbir şey yapmıyoruz.
22| 27, 16, 2, 18, 6
Not: | işareti o ana kadar sıraladığımız sayıları gösteriyor. Bu işaretin "|" solundaki sayıları sıralanmış kabul ediyoruz ve her geçişte bir sağındaki sayıyı solundakilerle kıyaslıyoruz.

Şimdi bir sağındaki 27 ile 22'yi karşılaştırıyoruz. 27>22 zaten sıralı olduğu için yer değiştirmiyorlar.
22, 27| 16, 2, 18, 6

27>16 dolayısıyla yer değiştiriyorlar.
22, 16, 27| 2, 18, 6
Ancak burada işlem bitmedi solundaki sayılarla tek tek kıyaslamaya devam ediyoruz:
22 > 16 olduğu için yer değiştirir
16, 22, 27| 2, 18, 6
Solunda başka sayı kalmadığı için 3. adım burada tamamlandı.

27>2 olduğu için yer değiştiriyorlar
16, 22, 2, 27| 18, 6
22 > 2 için tekrar yer değişikliği
16, 2, 22, 27| 18, 6
16 > 2 için tekrar yer değişikliği
2, 16, 22, 27| 18, 6
başka kıyaslanacak sayı kalmadığı için 4. adım burada tamamlandı.

adımda 18 sayısını solundaki sayılarla kıyaslamaya devam ediyoruz.
27>18 dolasıyla yer değiştirirler
2, 16, 22, 18, 27| 6
22>18 yer değiştirirler
2, 16, 18, 22, 27| 6
16<18 yer değişikliği olmaz ve 5. adım burada tamamlanır.

adımımızda son elemanımızı kıyaslamaya devam ediyoruz.
27>6 yer değişikliği
2, 16, 18, 22, 6, 27|
22>6 yer değişikliği
2, 16, 18, 6, 22, 27|
18>6 yer değişikliği
2, 16, 6, 18, 22, 27|
16>6 yer değişikliği
2, 6, 16, 18, 22, 27|
2<6 yer değişikliği yok.

"|" işaretinin sağında sayı kalmadığı için algoritma tamamlandı ve dizi sıralanmış oldu:
[2, 6, 16, 18, 22, 27]

### Soru 2: Big-O gösterimini yazınız.
Big-O gösterimi, bir algoritmanın performansını temsil eden bir kısaltmadır. Algoritmanın en kötü durumdaki çalışma süresini ifade eder ve büyüklük sınırlarına odaklanırken veri boyutunun çok büyük olduğunu varsayar.

Dolayısıyla Insertion Sort için worst-case tam tersi sıralı bir dizi olur. Tüm eleman sayısına n dersek ilk sıralamada n'den başlayarak tüm sıralamalar -1 azalacak ve n + (n-1) + (n-2)... kadar işlem yapılacağı için n.(n+1)/2 şeklinde hesaplanır.

Hesaplamalar sonucunda elde edilen (n2+n)/2 değerinin asimptotik üst sınırı O(n2) değerini verir.

### Soru 3: Time Complexity: Dizi sıralandıktan sonra 18 sayısı aşağıdaki case'lerden hangisinin kapsamına girer?
### Average case: Aradığımız sayının ortada olması
### Worst case: Aradığımız sayının sonda olması
### Best case: Aradığımız sayının dizinin en başında olması


Average case: Aradığımız sayının ortada olması.

### Soru 4: [7,3,5,8,2,9,4,15,6] dizisinin Selection Sort'a göre ilk 4 adımını yazınız.

Selection Sort, bir dizi içerisindeki elemanları genellikle küçükten büyüğe doğru sıralayan bir sıralama algoritmasıdır. Temel mantığı, her adımda dizideki en küçük elemanı bulup, onu sıralanmış bölümün sonuna yerleştirmektir.

Verilen dizide en küçük eleman bulunur ve baştaki sayı ile yer değiştirilir. Burada 2 en küçük eleman olduğu için 7 ile yer değiştir.
2| 3, 5, 8, 7, 9, 4, 15, 6

Kalanlar arasından en küçük eleman bulunur ve baştakiyle yer değiştirilir. Burada en küçük eleman 3 olduğu için yer ve başta olduğu için bir değişiklik yok.
2, 3| 5, 8, 7, 9, 4, 15, 6

En küçük eleman 4 dolayısıyla 4 ve 5 yer değiştirir.
2, 3, 4| 8, 7, 9, 5, 15, 6

En küçük eleman 5 ile 8 yer değiştirir.
2, 3, 4, 5| 7, 9, 8, 15, 6

Soruda ilk 4 adım sorulduğu için dizinin son hali:
[2, 3, 4, 5, 7, 9, 8, 15, 6]
