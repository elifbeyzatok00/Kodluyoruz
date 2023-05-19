# Proje 2
[16,21,11,8,12,22] -> Merge Sort

Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.
Big-O gösterimini yazınız.


# Proje 2 Çözümü

### Soru 1
[16,21,11,8,12,22] -> Merge Sort
Yukarıdaki dizinin sort türüne göre aşamaları:

1. Bölme aşaması: İlk olarak, verilen dizi daha küçük parçalara bölünür. Bölünme işlemi, her dizi tek bir elemana indirgenene kadar tekrarlanır.
[16, 21, 11, 8, 12, 22] -> [[16, 21, 11], [8, 12, 22]]
[[16,21,11], [8, 12, 22]] -> [[[16], [21, 11]], [[8], [12, 22]]]
[[[16], [21, 11]], [[8], [12, 22]]] -> [[[[16]], [[21], [11]]], [[[8]], [[12],[22]]]]

2. Birleştirme aşaması: Şimdi, daha küçük parçaları karşılaştırarak ve sıralayarak büyük parçalara birleştiririz. Bu işlem, tüm dizinin tamamen sıralanana kadar tekrarlanır.
[[[[16]], [[21], [11]]], [[[8]], [[12], [22]]]] -> [[[16], [11, 21]], [[8], [12, 22]]]
[[[16], [11, 21]], [[8], [12, 22]]] -> [[11, 16, 21], [8, 12, 22]]
[[11, 16, 21], [8, 12, 22]] -> [8, 11, 12, 16, 21, 22]

Sonuç: [8, 11, 12, 16, 21, 22]

### Soru 2
Big-O gösterimini yazınız:

Merge Sort'un Big-O gösterimi O(n log n) olarak ifade edilir. Bunun nedeni algoritmanın "böl ve fethet" yaklaşımıdır.

Bölme aşaması: Algoritma, giriş dizisini daha küçük parçalara böler. Her bir bölme işlemi, dizinin boyutunu yarıya indirir. Bu nedenle, bu bölme işlemi logaritmik zaman karmaşıklığına (log n) sahip olacaktır. Çünkü, genel olarak, bir şeyi sürekli olarak yarıya böldüğümüzde, bunu logaritmik sayıda kez yapabiliriz.

Birleştirme aşaması: Daha sonra, bu küçük parçalar, sıralanmış bir dizi oluşturmak üzere birleştirilir. Her bir birleştirme işlemi, en kötü durumda, her elemanın bir kez karşılaştırılmasını gerektirir, bu da birleştirme işleminin lineer zaman karmaşıklığına (n) sahip olacağı anlamına gelir.

Bu iki aşamanın birleşimi, Merge Sort'un O(n log n) zaman karmaşıklığına sahip olmasını sağlar. Çünkü her bölme adımında (log n), her eleman üzerinde bir işlem gerçekleştiriyoruz (n).
