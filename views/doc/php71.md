# mac安装PHP71

[安装brew工具](https://brew.sh/index_zh-cn.html)

``` bash
$ brew install nginx
$ brew install php71
$ brew services start php71
```
nginx配置:
``` nginx
server {
    listen       8089;
    server_name  dev.local;
    root   /html;
    index  index.html index.htm index.php;

    autoindex_localtime on;
    access_log off;
     
    location ~ .*\.(php)?$ {
        fastcgi_pass 127.0.0.1:9000;
        fastcgi_index index.php;
        include fastcgi.conf;
    }

    location / {
        if (!-e $request_filename){
            rewrite ^(.*)$ /index.php?s=$1 last;
            break;
        }
    } 
}
```