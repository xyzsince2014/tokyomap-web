FROM nginx:1.17

RUN mkdir -p /var/log/nginx/index
RUN touch /var/log/nginx/index/access.log
RUN touch /var/log/nginx/index/error.log
RUN mkdir -p /var/log/nginx/api
RUN touch /var/log/nginx/api/access.log
RUN touch /var/log/nginx/api/error.log
RUN mkdir -p /var/log/nginx/socket
RUN touch /var/log/nginx/socket/access.log
RUN touch /var/log/nginx/socket/error.log

# Nginx conf
COPY ./default.conf /etc/nginx/conf.d/default.conf

# make keys
# RUN /etc/nginx/ssl
# RUN sudo yum install -y openssl
# RUN sudo openssl genrsa -out /etc/nginx/ssl/server.key 2048
# RUN sudo openssl req -new -key /etc/nginx/ssl/server.key -out /etc/nginx/ssl/server.csr

# make Nginx listen to 80
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]