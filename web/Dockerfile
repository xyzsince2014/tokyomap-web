FROM nginx:1.17

# Nginx conf
# RUN mkdir -p /etc/ssl/certs
COPY ./default.conf /etc/nginx/conf.d/default.conf

# make Nginx listen to 80
# EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
