frappe.ui.form.on("Sales Order", {
  refresh: function(doc, dt, dn) {
    var me = this;
    if(doc.status !== 'Closed') {
      if(doc.status !== 'On Hold') {
        					// sales invoice
					if(flt(doc.per_billed, 6) < 100) {
						cur_frm.add_custom_button(__('LC SALES INVOICE'), () => make_lc_sales_invoice(), __('Create'));
					}
        }}
  },

})

function make_lc_sales_invoice() {
  var me = this;
  frappe.model.open_mapped_doc({
    method: "lc.api.make_lc_sales_invoice",
    frm: cur_frm
  })
}