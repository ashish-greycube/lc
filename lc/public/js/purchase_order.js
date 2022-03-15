frappe.ui.form.on("Purchase Order", {
  refresh: function(frm) {
    var me = this;
    let doc=frm.doc
    if(doc.docstatus == 1 && doc.status !== 'Closed') {
      if(doc.status !== 'On Hold') {
        					// purchase invoice
					if(flt(doc.per_billed) < 100) {
						cur_frm.add_custom_button(__('LC PR INVOICE'), () => make_lc_purchase_invoice(), __('Create'));
					}
        }}
  },

})

function make_lc_purchase_invoice() {
  var me = this;
  frappe.model.open_mapped_doc({
    method: "lc.api.make_lc_purchase_invoice",
    frm: cur_frm
  })
}