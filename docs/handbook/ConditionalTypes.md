---
title: 条件类型
author: END
date: '2021-12-12'
---

## 条件类型

### 一级标题

#### 二级标题

##### 三级标题

冒泡排序

```java
public class BubbleSort {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // 交换相邻元素的位置
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

    public static void main(String[] args) {
        int[] arr = {5, 2, 8, 12, 1};

        System.out.println("排序前的数组：");
        for (int num : arr) {
            System.out.print(num + " ");
        }

        bubbleSort(arr);

        System.out.println("\n排序后的数组：");
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}
```



##### 三级标题

#### 二级标题

##### 三级标题

内容1

##### 三级标题

### 一级标题

#### 二级标题

##### 三级标题

内容1

##### 三级标题

#### 二级标题

##### 三级标题

内容1

##### 三级标题

<LastUpdated />