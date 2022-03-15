frappe.ui.form.on("Sales Order", {
  refresh: function(frm) {
    var me = this;
    let doc=frm.doc
    if(doc.docstatus == 1 && doc.status !== 'Closed') {
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