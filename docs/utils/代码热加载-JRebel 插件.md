# 代码热加载插件-JRebel 插件

### 1、下载插件

点击 [https://plugins.jetbrains.com/plugin/4441-jrebel-and-xrebel/versions(opens new window)](https://plugins.jetbrains.com/plugin/4441-jrebel-and-xrebel/versions)地址，必须下载 **2022.4.1** 版本。如下图所示：

![1697181559408](/assets/1697181559408.png)

### 2、idea 配置

打开 [Preference -> Plugins] 菜单，点击「Install Plugin from Disk...」按钮，选择刚下载的 JRebel 插件的压缩包。如下图所示：

![1697181579021](/assets/1697181579021.png)

安装完成后，需要重启 IDEA 生效。

打开 [Preference -> JRebel & XRebel] 菜单，输入 GUID address 为 https://jrebel.qekang.com/1e67ec1b-122f-4708-87d0-c1995dc0cdaa ，邮件随便写，完成 JRebel 的激活。如下图所示：

![1697181604151](/assets/1697181604151.png)

之后，点击「Work Offline」按钮，设置 JRebel 为离线，避免因为网络问题导致激活失效。如下图所示：

![1697181621211](/assets/1697181621211.png)

点击「Debug With JRebel」按钮，使用 JRebel 启动项目。如下图所示：

![1697181637727](/assets/1697181637727.png)

每次修改 Java 代码后，点击左下角的「热加载」按钮，即可实现代码热加载。如下图所示：（Ctrl + Shift +F9 ）

![1697181660384](/assets/1697181660384.png)

