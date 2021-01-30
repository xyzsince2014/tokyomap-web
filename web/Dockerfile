FROM nginx:1.17

COPY ./certs /etc/ssl/certs
COPY ./default.conf /etc/nginx/conf.d/default.conf

EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
