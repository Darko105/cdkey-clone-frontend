// this.loadUserOrders(this.userData.id).subscribe(
      //   data => {
      //     this.userOrders = data;
      //     this.userOrders.forEach(order => {
      //       if (order.product_id) {
      //         // Call the ProductService to fetch the product details
      //         this.ps.getProduct('/' + order.product_id).subscribe(
      //           product => {
      //             // Avoid duplicate products
      //             if (!this.products.some(p => p.kinguinId === product.kinguinId)) {
      //               this.products.push(product);
      //             }
      //           },
      //           error => {
      //             console.error(`Failed to load product ${order.product_id}`, error);
      //           }
      //         );
      //       }
      //     });
      //   },
      //   error => {
      //     alert(error.message);
      //   }
      // );
