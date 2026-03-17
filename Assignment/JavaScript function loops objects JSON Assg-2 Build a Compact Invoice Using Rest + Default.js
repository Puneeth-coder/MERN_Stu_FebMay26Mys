function invoice(gstRate = 0.18, ...items) {

    let subtotal = 0;

    for (let i = 0; i < items.length; i++) {

        let item = items[i];

        // Stop if item name is STOP
        if (item.name === "STOP") {
            break;
        }

        // Ignore invalid items
        if (!item.price || !item.qty || item.price <= 0 || item.qty <= 0) {
            continue;
        }

        subtotal += item.price * item.qty;
    }

    let gst = subtotal * gstRate;
    let total = subtotal + gst;

    return {
        subtotal: subtotal,
        gst: gst,
        total: total
    };
}