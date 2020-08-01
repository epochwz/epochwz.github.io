# CentOS

> ! **注意：安装系统时不要连接网络，否则会自动以龟速下载软件
(系统安装完成后可以通过更换软件源提高软件下载速度)**

## 通用设置

```bash
# 0. 无需密码获取权限
echo "$USER ALL=(ALL:ALL) NOPASSWD:ALL" | sudo tee -a /etc/sudoers
# 1. 更换国内的软件源
sudo sed -i "s/http:\/\/.*.ubuntu.com/http:\/\/mirrors.aliyun.com/g" /etc/apt/sources.list
# 2. 更新系统以及软件
sudo apt update -y && sudo apt upgrade -y
```

## 通用工具

```bash
sudo apt install -y vim git curl unzip aptitude gdebi
```

## 界面美化

1. 安装 GNOME 工具和扩展

   ```bash
   sudo apt install -y gnome-tweak-tool gnome-shell-extensions
   ```

2. 启用 GNOME 内置的扩展

   - User Themes
   - Desktop Icons
   - windowNavigator
   - Applications Menu
   - Workspace Indicator
   - Ubuntu AppIndicators
   - Removable Drive Menu

3. 安装 GNOME 浏览器插件

   [点击安装 Firefox 浏览器插件](https://extensions.gnome.org/)

   或者

   [点击安装 Chrome  浏览器插件](https://chrome.google.com/webstore/detail/gnome-shell-integration/gphhapmejobijbbhgpjhcjognlahblep/related)

4. 安装 GNOME 浏览器扩展

   - ~~阻止自动休眠~~
     [Caffeine](https://extensions.gnome.org/extension/517/caffeine/)
   - 大小写指示器
     [Lock Keys](https://extensions.gnome.org/extension/36/lock-keys/)
   - 隐藏顶栏
     [Hide Top Bar](https://extensions.gnome.org/extension/545/hide-top-bar/)
   - 装逼专用
     [Dash to Dock](https://extensions.gnome.org/extension/307/dash-to-dock/)
   - 图标集成
     [TopIcons Plus](https://extensions.gnome.org/extension/1031/topicons/)
   - 酷炫标签
     [Coverflow Alt-Tab](https://extensions.gnome.org/extension/97/coverflow-alt-tab/)
   - 下拉命令行
     [Drop Down Terminal](https://extensions.gnome.org/extension/442/drop-down-terminal/)
   - 全局剪贴板
     [Clipboard Indicator](https://extensions.gnome.org/extension/779/clipboard-indicator/)
   - 系统监视器
     [system-monitor-next](https://extensions.gnome.org/extension/3010/system-monitor-next/)

     先安装依赖 `sudo apt install -y gir1.2-gtop-2.0 gir1.2-nm-1.0
     gir1.2-clutter-1.0`

   - 隐藏标题栏
     [No Title Bar - Forked](https://extensions.gnome.org/extension/2015/no-title-bar-forked/)
   - 资源监视器
     [~~Vitals~~](https://extensions.gnome.org/extension/1460/vitals)
   - 网速监视器
     [~~NetSpeed~~](https://extensions.gnome.org/extension/104/netspeed/)
   - 最近的文件
     [~~Recent Items~~](https://extensions.gnome.org/extension/72/recent-items/)

5. 安装 MacOS 风格的主题

   ```bash
   # ########## 软件信息 ##########
   # 仓库作者
   AUTHOR=vinceliuice && \
   # 仓库名称
   REPOSITORY=Mojave-gtk-theme && \
   # 仓库分支
   VERSION=master && \
   # 资源名称
   ZIP_NAME=$VERSION.zip && \
   # 下载链接
   DOWNLOAD=https://codeload.github.com/$AUTHOR/$REPOSITORY/zip/$VERSION && \
   # ########## 安装信息 ##########
   # 下载路径
   PKG_PATH=~/.pkg/github/$REPOSITORY/$VERSION && mkdir -p $PKG_PATH && cd $PKG_PATH && \
   # 源码路径 
   SRC_PATH=$PKG_PATH/$REPOSITORY-$VERSION && \
   # ########## 下载解压 ##########
   wget -nc -c $DOWNLOAD -O $ZIP_NAME || true && unzip -qo $ZIP_NAME && \
   # ########## 安装配置 ##########
   # 安装依赖
   sudo apt install -y sassc libcanberra-gtk-module libglib2.0-dev && \
   # 安装主题
   cd $SRC_PATH && ./install.sh
   ```
6. 安装 MacOS 风格的图标

   ```bash
   # ########## 软件信息 ##########
   # 仓库作者
   AUTHOR=keeferrourke && \
   # 仓库名称
   REPOSITORY=la-capitaine-icon-theme && \
   # 资源版本
   VERSION=0.6.1 && \
   # 资源名称 
   ZIP_NAME=v$VERSION.tar.gz && \
   # 下载链接
   DOWNLOAD=https://github.com/$AUTHOR/$REPOSITORY/archive/$ZIP_NAME && \
   # ########## 安装信息 ########## 
   # 下载路径 
   PKG_PATH=~/.pkg/github/$REPOSITORY/$VERSION && mkdir -p $PKG_PATH && cd $PKG_PATH && \
   # 安装路径
   DES_PATH=~/.icons && mkdir -p $DES_PATH && \
   # 源码路径
   SRC_PATH=$DES_PATH/$REPOSITORY-$VERSION && \
   # ########## 下载解压 ##########
   wget -nc -c $DOWNLOAD || true && tar -zxf $ZIP_NAME -C $DES_PATH && \
   # ########## 安装配置 ########## 
   cd $SRC_PATH && ./configure
   ```

7. 注销并重新登录 -> 启动应用 `Tweak` -> 选择外观 (Appearance) ->
   根据自己的喜好更换 `Shell` & `Application` 的主题

## 科学上网

1. 搭建 v2ray 服务器

   ```bash
   bash <(curl -sL https://raw.githubusercontent.com/hijkpw/scripts/master/ubuntu_install_v2ray2.sh)
   ```

2. 安装 v2ray 图形界面

   ```bash
   # ########## 软件信息 ##########
   # 仓库作者
   AUTHOR=Qv2ray && \
   # 仓库名称
   REPOSITORY=Qv2ray && \
   # 软件版本
   VER_NAME=2.5.0 && \
   # 资源名称 
   DEB_NAME=qv2ray_$VER_NAME-1_amd64.deb && \
   # 下载链接
   DOWNLOAD=https://github.com/$AUTHOR/$REPOSITORY/releases/download/v$VER_NAME/$DEB_NAME && \
   # ########## 安装信息 ##########
   # 下载路径 
   PKG_PATH=~/.pkg/v2ray/$REPOSITORY && mkdir -p $PKG_PATH && cd $PKG_PATH && \
   # ########## 下载安装 ##########
   wget -nc -c $DOWNLOAD || true && sudo apt install -y ./$DEB_NAME
   ```

3. 安装 v2ray 核心文件

   ```bash
   # ########## 软件信息 ##########
   # 仓库作者
   AUTHOR=v2ray && \
   # 仓库名称
   REPOSITORY=v2ray-core && \
   # 软件版本
   VER_NAME=4.23.0 && \
   # 资源名称 
   ZIP_NAME=v2ray-linux-64.zip && \
   # 下载链接
   DOWNLOAD=https://github.com/$AUTHOR/$REPOSITORY/releases/download/v$VER_NAME/$ZIP_NAME && \
   # ########## 安装信息 ##########
   # 下载路径 
   PKG_PATH=~/.pkg/v2ray/$REPOSITORY/$VER_NAME && mkdir -p $PKG_PATH && cd $PKG_PATH && \
   # 安装路径
   DES_PATH=~/.config/qv2ray/vcore && mkdir -p $DES_PATH && \
   # ########## 下载解压 ##########
   wget -nc -c $DOWNLOAD || true && unzip -qo $ZIP_NAME -d $DES_PATH
   ```

```
curl -sS https://qv2ray.github.io/debian/pubkey.gpg | sudo apt-key add -

echo "deb https://qv2ray.github.io/debian/ stable main" | sudo tee /etc/apt/sources.list.d/qv2ray.list

sudo apt update -y && sudo apt install -y qv2ray
```

## 软件安装

### 常用软件

#### 输入法

0. 安装输入法框架 (fcitx)

   ```bash
   sudo apt install -y fcitx
   ```

1. 隐藏输入法框架 (ibus)

   设置 -> 区域 & 语言
   1. 只留下英文输入法：删除所有中文输入法，ibus 图标便会自动隐藏
   2. 管理已安装的语言：添加中文语言的支持，选择使用 fcitx 输入法

2. 安装百度输入法

   ```bash
   	# 安装依赖包
   	sudo apt install -y gdebi unzip fcitx-libs libqt5quickwidgets5 qml-module-qtquick-controls2 && \
   	# 下载的路径
   	PKG_PATH=~/.pkg/baidupinyin && mkdir -p $PKG_PATH && cd $PKG_PATH && \
   	# 下载安装包
   	wget -nc -c "http://srf.baidu.com/?c=j&e=d&from=1000e&platform=ubuntu&ref=index_entrance_android_click" -O baidupinyin.zip || true && \
   	# 解压并安装
   	unzip -qo baidupinyin.zip && sudo gdebi -n fcitx-baidupinyin.deb && \
   	# 重启计算机
   	sleep 1 && sudo reboot
   ```

3. 安装搜狗输入法

   ```bash
   	# 添加证书
   	curl -sL 'https://keyserver.ubuntu.com/pks/lookup?&op=get&search=0x73BC8FBCF5DE40C6ADFCFFFA9C949F2093F565FF' | sudo apt-key add
   	# 添加仓库
   	sudo apt-add-repository 'deb http://archive.ubuntukylin.com/ukui focal main'
   	# 安装软件
   	sudo apt install -y sogouimebs
   	# 重启电脑
   	sleep 1 && sudo reboot
   ```

#### 浏览器

```bash
# 软件的名称
DEB_NAME=google-chrome-stable_current_amd64.deb && \
# 下载的路径
PKG_PATH=~/.pkg/chrome && mkdir -p $PKG_PATH && cd $PKG_PATH && \
# 下载安装包
wget -nc -c "https://dl.google.com/linux/direct/$DEB_NAME" || true && \
# 解压并安装
sudo apt install -y ./$DEB_NAME
```

#### 虚拟机

```bash
# 软件的版本
VERSION=6.1.10 && \
# 软件的名称
DEB_NAME=virtualbox-6.1_$VERSION-138449~Ubuntu~eoan_amd64.deb && \
# 下载的路径
PKG_PATH=~/.pkg/virtualbox && mkdir -p $PKG_PATH && cd $PKG_PATH && \
# 下载安装包
wget -nc -c "https://download.virtualbox.org/virtualbox/$VERSION/$DEB_NAME" || true && \
# 解压并安装
sudo apt install -y ./$DEB_NAME
```

#### 编辑器

```bash
# ########## 软件信息 ##########
# 软件版本
VERSION=2020.1.1 && \
# 构建版本
BUILD=201.7223.91 && \
# 软件名称
APP_NAME=idea-IU-$BUILD && \
# 资源名称
ZIP_NAME=ideaIU-$VERSION.tar.gz && \
# 下载链接
DOWNLOAD=https://download.jetbrains.com/idea/$ZIP_NAME && \
# ########## 安装信息 ##########
# 下载路径
PKG_PATH=~/.pkg/jetbrains/idea/$VERSION && mkdir -p $PKG_PATH && cd $PKG_PATH && \
# 基础路径
DES_PATH=~/app && mkdir -p $DES_PATH && \
# 软件路径
APP_HOME=$DES_PATH/$APP_NAME && \
# 命令路径
BIN_PATH=$APP_HOME/bin && \
# ########## 下载解压 ##########  
wget -nc -c $DOWNLOAD -O $ZIP_NAME || true && tar -zxf $ZIP_NAME -C $DES_PATH && \
# ########## 安装配置 ##########
cd $BIN_PATH && ./idea.sh
```

```txt
3AGXEJXFK9-eyJsaWNlbnNlSWQiOiIzQUdYRUpYRks5IiwibGljZW5zZWVOYW1lIjoiaHR0cHM6Ly96aGlsZS5pbyIsImFzc2lnbmVlTmFtZSI6IiIsImFzc2lnbmVlRW1haWwiOiIiLCJsaWNlbnNlUmVzdHJpY3Rpb24iOiIiLCJjaGVja0NvbmN1cnJlbnRVc2UiOmZhbHNlLCJwcm9kdWN0cyI6W3siY29kZSI6IklJIiwiZmFsbGJhY2tEYXRlIjoiMjA4OS0wNy0wNyIsInBhaWRVcFRvIjoiMjA4OS0wNy0wNyJ9LHsiY29kZSI6IkFDIiwiZmFsbGJhY2tEYXRlIjoiMjA4OS0wNy0wNyIsInBhaWRVcFRvIjoiMjA4OS0wNy0wNyJ9LHsiY29kZSI6IkRQTiIsImZhbGxiYWNrRGF0ZSI6IjIwODktMDctMDciLCJwYWlkVXBUbyI6IjIwODktMDctMDcifSx7ImNvZGUiOiJQUyIsImZhbGxiYWNrRGF0ZSI6IjIwODktMDctMDciLCJwYWlkVXBUbyI6IjIwODktMDctMDcifSx7ImNvZGUiOiJHTyIsImZhbGxiYWNrRGF0ZSI6IjIwODktMDctMDciLCJwYWlkVXBUbyI6IjIwODktMDctMDcifSx7ImNvZGUiOiJETSIsImZhbGxiYWNrRGF0ZSI6IjIwODktMDctMDciLCJwYWlkVXBUbyI6IjIwODktMDctMDcifSx7ImNvZGUiOiJDTCIsImZhbGxiYWNrRGF0ZSI6IjIwODktMDctMDciLCJwYWlkVXBUbyI6IjIwODktMDctMDcifSx7ImNvZGUiOiJSUzAiLCJmYWxsYmFja0RhdGUiOiIyMDg5LTA3LTA3IiwicGFpZFVwVG8iOiIyMDg5LTA3LTA3In0seyJjb2RlIjoiUkMiLCJmYWxsYmFja0RhdGUiOiIyMDg5LTA3LTA3IiwicGFpZFVwVG8iOiIyMDg5LTA3LTA3In0seyJjb2RlIjoiUkQiLCJmYWxsYmFja0RhdGUiOiIyMDg5LTA3LTA3IiwicGFpZFVwVG8iOiIyMDg5LTA3LTA3In0seyJjb2RlIjoiUEMiLCJmYWxsYmFja0RhdGUiOiIyMDg5LTA3LTA3IiwicGFpZFVwVG8iOiIyMDg5LTA3LTA3In0seyJjb2RlIjoiUk0iLCJmYWxsYmFja0RhdGUiOiIyMDg5LTA3LTA3IiwicGFpZFVwVG8iOiIyMDg5LTA3LTA3In0seyJjb2RlIjoiV1MiLCJmYWxsYmFja0RhdGUiOiIyMDg5LTA3LTA3IiwicGFpZFVwVG8iOiIyMDg5LTA3LTA3In0seyJjb2RlIjoiREIiLCJmYWxsYmFja0RhdGUiOiIyMDg5LTA3LTA3IiwicGFpZFVwVG8iOiIyMDg5LTA3LTA3In0seyJjb2RlIjoiREMiLCJmYWxsYmFja0RhdGUiOiIyMDg5LTA3LTA3IiwicGFpZFVwVG8iOiIyMDg5LTA3LTA3In0seyJjb2RlIjoiUlNVIiwiZmFsbGJhY2tEYXRlIjoiMjA4OS0wNy0wNyIsInBhaWRVcFRvIjoiMjA4OS0wNy0wNyJ9XSwiaGFzaCI6IjEyNzk2ODc3LzAiLCJncmFjZVBlcmlvZERheXMiOjcsImF1dG9Qcm9sb25nYXRlZCI6ZmFsc2UsImlzQXV0b1Byb2xvbmdhdGVkIjpmYWxzZX0=-WGTHs6XpDhr+uumvbwQPOdlxWnQwgnGaL4eRnlpGKApEEkJyYvNEuPWBSrQkPmVpim/8Sab6HV04Dw3IzkJT0yTc29sPEXBf69+7y6Jv718FaJu4MWfsAk/ZGtNIUOczUQ0iGKKnSSsfQ/3UoMv0q/yJcfvj+me5Zd/gfaisCCMUaGjB/lWIPpEPzblDtVJbRexB1MALrLCEoDv3ujcPAZ7xWb54DiZwjYhQvQ+CvpNNF2jeTku7lbm5v+BoDsdeRq7YBt9ANLUKPr2DahcaZ4gctpHZXhG96IyKx232jYq9jQrFDbQMtVr3E+GsCekMEWSD//dLT+HuZdc1sAIYrw==-MIIElTCCAn2gAwIBAgIBCTANBgkqhkiG9w0BAQsFADAYMRYwFAYDVQQDDA1KZXRQcm9maWxlIENBMB4XDTE4MTEwMTEyMjk0NloXDTIwMTEwMjEyMjk0NlowaDELMAkGA1UEBhMCQ1oxDjAMBgNVBAgMBU51c2xlMQ8wDQYDVQQHDAZQcmFndWUxGTAXBgNVBAoMEEpldEJyYWlucyBzLnIuby4xHTAbBgNVBAMMFHByb2QzeS1mcm9tLTIwMTgxMTAxMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA5ndaik1GD0nyTdqkZgURQZGW+RGxCdBITPXIwpjhhaD0SXGa4XSZBEBoiPdY6XV6pOfUJeyfi9dXsY4MmT0D+sKoST3rSw96xaf9FXPvOjn4prMTdj3Ji3CyQrGWeQU2nzYqFrp1QYNLAbaViHRKuJrYHI6GCvqCbJe0LQ8qqUiVMA9wG/PQwScpNmTF9Kp2Iej+Z5OUxF33zzm+vg/nYV31HLF7fJUAplI/1nM+ZG8K+AXWgYKChtknl3sW9PCQa3a3imPL9GVToUNxc0wcuTil8mqveWcSQCHYxsIaUajWLpFzoO2AhK4mfYBSStAqEjoXRTuj17mo8Q6M2SHOcwIDAQABo4GZMIGWMAkGA1UdEwQCMAAwHQYDVR0OBBYEFGEpG9oZGcfLMGNBkY7SgHiMGgTcMEgGA1UdIwRBMD+AFKOetkhnQhI2Qb1t4Lm0oFKLl/GzoRykGjAYMRYwFAYDVQQDDA1KZXRQcm9maWxlIENBggkA0myxg7KDeeEwEwYDVR0lBAwwCgYIKwYBBQUHAwEwCwYDVR0PBAQDAgWgMA0GCSqGSIb3DQEBCwUAA4ICAQBonMu8oa3vmNAa4RQP8gPGlX3SQaA3WCRUAj6Zrlk8AesKV1YSkh5D2l+yUk6njysgzfr1bIR5xF8eup5xXc4/G7NtVYRSMvrd6rfQcHOyK5UFJLm+8utmyMIDrZOzLQuTsT8NxFpbCVCfV5wNRu4rChrCuArYVGaKbmp9ymkw1PU6+HoO5i2wU3ikTmRv8IRjrlSStyNzXpnPTwt7bja19ousk56r40SmlmC04GdDHErr0ei2UbjUua5kw71Qn9g02tL9fERI2sSRjQrvPbn9INwRWl5+k05mlKekbtbu2ev2woJFZK4WEXAd/GaAdeZZdumv8T2idDFL7cAirJwcrbfpawPeXr52oKTPnXfi0l5+g9Gnt/wfiXCrPElX6ycTR6iL3GC2VR4jTz6YatT4Ntz59/THOT7NJQhr6AyLkhhJCdkzE2cob/KouVp4ivV7Q3Fc6HX7eepHAAF/DpxwgOrg9smX6coXLgfp0b1RU2u/tUNID04rpNxTMueTtrT8WSskqvaJd3RH8r7cnRj6Y2hltkja82HlpDURDxDTRvv+krbwMr26SB/40BjpMUrDRCeKuiBahC0DCoU/4+ze1l94wVUhdkCfL0GpJrMSCDEK+XEurU18Hb7WT+ThXbkdl6VpFdHsRvqAnhR2g4b+Qzgidmuky5NUZVfEaZqV/g==
```

#### 腾讯系

```bash
# 安装 WeChat (Electron)
sudo snap install electronic-wechat
# 安装 WeChat (Docker)
bash <(curl -L -s https://raw.githubusercontent.com/ygcaicn/ubuntu_qq/master/wechat.sh)
# 安装 QQ/TIM (Docker)
bash <(curl -L -s https://raw.githubusercontent.com/ygcaicn/ubuntu_qq/master/qq.sh)
```

### 开发软件

#### Nodejs

```bash
# nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
# 列出 Nodejs 的所有 LTS 版本
nvm ls-remote --lts
# 安装 Nodejs
nvm install v12.18.3
# 换源 (可选)
npm config set registry https://registry.npm.taobao.org
```

#### OpenJDK

```bash
# 安装
sudo apt install openjdk-8-jdk
# 查看安装信息 / 设置当前版本
sudo update-alternatives --config java
# 设置环境变量
echo "JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64" | sudo tee -a /etc/profile.d/env.sh
```

#### Docker

```bash
# 安装
wget -qO-  https://get.docker.com | bash
# 授权
sudo usermod -aG docker $USER
# 换源 (可选)
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": [
    "https://ngdra8b3.mirror.aliyuncs.com"
   ]
}

EOF
# 重启
sudo systemctl daemon-reload
sudo systemctl restart docker
```

#### MySQL

```bash
docker pull mysql
docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root --name mysql mysql
```

## 日常维护

### 备份文件

```bash
/etc/profile.d/env.sh
~/.bash_aliases
~/.gitconfig
~/.ssh
~/.pkg
~/.config/JetBrains/IntelliJIdea2020.1/scratches/
```

### 常用清理命令

```bash
sudo apt autoclean	    # 清除已删除软件包的 deb 安装包
sudo apt clean		    # 清除所有的软件包的 deb 安装包
sudo apt autoremove 	# 清除不再被其他软件依赖的软件包
sudo apt remove 		# 删除已安装的软件包 (保留配置文件)
sudo apt remove --purge	# 删除已安装的软件包 (删除配置文件)
```

### 快捷键

```txt
# Ubuntu
Super           # Overview
Super+E         # File
Super+T         # Terminal
Super+B         # Browser
Super+I         # Intellij IDEA
Alt/Super+Tab   # Applications Switcher
Alt+F1          # Applications
Alt+F2          # Run Command
Ctrl+Alt+↑/↓    # 切换工作区

# GNOME Shell Extensions
# Clipboard Indicator
Ctrl+F9         # 切换面板
Ctrl+F10        # 清除历史 (Disabled)
Ctrl+F11        # 上个记录
Ctrl+F12        # 下个记录
# Hide Top Bar
Super+Space     # 切换面板
# Dash to Dock
Super+Q+<Num>   # 在 Dock 上选择指定应用，重复按数字键切换应用的窗口
# WindowNavigator
Super,Ctrl+<num>   # 在活动预览中选择指定工作区
Super,Alt+<num>    # 在活动预览中选择指定的窗口

# Chrome Extensions
Ctrl+Shift+S    # 沙拉查词
```

## 常见问题

### 中文乱码问题

- 问题描述：Linux 解压 Windows 下的 ZIP 压缩包时出现文件名中文乱码

  解决方法：解压时添加 `-O <charset>` 选项

  ```bash
  upzip -O <GBK|GB2312|CP936> filename.zip
  ```

### 关机卡死问题

- 问题描述：Ubuntu 关机 / 注销时卡死或陷入长时间等待 (90s)

  解决方法

  ```bash
  sudo apt install watchdog && \
  sudo systemctl enable watchdog.service && \
  sudo systemctl start watchdog.serviceI
  ```