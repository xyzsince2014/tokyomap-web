FROM nginx:1.17

ARG DOMAIN_APP_SERVER
ENV DOMAIN_APP_SERVER=${DOMAIN_APP_SERVER}

COPY ./certs /etc/ssl/certs
COPY ./public /usr/share/nginx
COPY ./default.conf /etc/nginx/conf.d/default.conf

EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
