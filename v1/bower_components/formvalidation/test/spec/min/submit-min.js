describe("submit",function(){var e,t;FormValidation.Validator.fakeRemote={validate:function(e,t,n){var i=new $.Deferred;return setTimeout(function(){i.resolve(t,"fakeRemote",{valid:n.valid})},0),i}},beforeEach(function(){$(['<form id="submitForm" class="form-horizontal" role="form">','<div class="form-group">','<input name="username" type="text" class="form-control" value="me" required />',"</div>",'<button id="sendButton" type="submit" class="btn btn-default">Send</button>',"</form>"].join("\n")).appendTo("body"),this.$form=$("#submitForm"),this.$form.formValidation().on("success.form.fv",function(t){t.preventDefault(),++e}).submit(function(e){e.preventDefault()}),e=0,this.fv=this.$form.data("formValidation"),this.$username=this.fv.getFieldElements("username"),t=jasmine.DEFAULT_TIMEOUT_INTERVAL,jasmine.DEFAULT_TIMEOUT_INTERVAL=1e4}),afterEach(function(){$("#submitForm").formValidation("destroy").remove(),jasmine.DEFAULT_TIMEOUT_INTERVAL=t}),it("without callback nor remote",function(t){$("#sendButton").click(),setTimeout(function(){expect(e).toBe(1),t()},0)}),it("with callback returning true",function(t){this.fv.addField("username",{validators:{callback:{message:"Please enter an username",callback:function(e,t,n){return!0}}}}),$("#sendButton").click(),setTimeout(function(){expect(e).toBe(1),t()},0)}),it("with callback returning false",function(t){this.fv.addField("username",{validators:{callback:{message:"Please enter an username",callback:function(e,t,n){return!1}}}}),$("#sendButton").click(),setTimeout(function(){expect(e).toBe(0),t()},0)}),it("with remote returning true",function(t){this.fv.addField("username",{validators:{remote:{url:"/test/valid.json",message:"The username is not available"}}}),$("#sendButton").click(),setTimeout(function(){expect(e).toBe(1),t()},100)}),it("with remote returning false",function(t){this.fv.addField("username",{validators:{remote:{url:"/test/invalid.json",message:"The username is not available"}}}),$("#sendButton").click(),setTimeout(function(){expect(e).toBe(0),t()},100)}),it("with fake remote returning true",function(t){this.fv.addField("username",{validators:{fakeRemote:{message:"The username is not available",valid:!0}}}),$("#sendButton").click(),setTimeout(function(){expect(e).toBe(1),t()},100)}),it("with fake remote returning false",function(t){this.fv.addField("username",{validators:{fakeRemote:{message:"The username is not available",valid:!1}}}),$("#sendButton").click(),setTimeout(function(){expect(e).toBe(0),t()},100)}),it("remote validator trigger err.form.fv event",function(e){var t=0;this.$form.on("err.form.fv",function(e){t++}),this.fv.addField("username",{validators:{remote:{url:"/test/valid.json"}}}),$("#sendButton").click(),setTimeout(function(){expect(t).toBe(0),e()},100)})});