# maintenance-app

server {

	server_name your_domain.com;

	root /var/www/your-app;
    index index.html;

    location / {
        try_files $uri $uri/ @rewrites;
    }

    location @rewrites {
        rewrite ^(.+)$ /index.html last;
    }

    location ~* \.(jpg|jpeg|gif|png|PNG|ico)$ {
        root /var/www/your-app;
    }
}
 
