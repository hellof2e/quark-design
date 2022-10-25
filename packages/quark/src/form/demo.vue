<template>
	<div class="demo scoped-form">
		<h2>{{ translate("title.basic") }}</h2>
		<quark-form ref="form1">
			<quark-field name="name" :label="translate('labels')[0]"></quark-field>
			<div class="line" />
			<quark-field
				type="password"
				name="password"
				:label="translate('labels')[1]"
			/>
			<div class="submit-wrap">
				<quark-button type="primary" @click="submit1" class="submit">{{
					translate("submit")
				}}</quark-button>
			</div>
		</quark-form>
		<h2>{{ translate("title.rule") }}</h2>
		<quark-form ref="form2">
			<quark-field
				:placeholder="translate('placeholder')"
				name="age"
				:label="translate('labels')[2]"
			></quark-field>
			<div class="line" />
			<quark-field
				type="number"
				value="123"
				max="11"
				name="phone"
				:label="translate('labels')[3]"
			/>
			<div class="submit-wrap">
				<quark-button type="primary" @click="submit2" class="submit">{{
					translate("submit")
				}}</quark-button>
			</div>
		</quark-form>
		<h2>{{ translate("title.items") }}</h2>
		<quark-form ref="form3">
			<quark-field
				:placeholder="translate('placeholder')"
				name="field"
				:label="translate('labels')[2]"
				:value="data.field"
			></quark-field>
			<div class="line" />
			<div class="form-item">
				<quark-textarea name="textarea" :value="data.textarea" />
			</div>
			<div class="line" />
			<div class="form-item">
				<span>{{ translate("vegetable") }}</span>
				<quark-checkbox
					name="checkbox1"
					shape="square"
					:checked="data.checkbox1"
					>{{ translate("vegetables")[0] }}</quark-checkbox
				>
				<quark-checkbox
					name="checkbox2"
					shape="square"
					:checked="data.checkbox2"
					>{{ translate("vegetables")[1] }}</quark-checkbox
				>
			</div>
			<div class="line" />
			<div class="form-item">
				<span>{{ translate("fruit") }}</span>
				<quark-radio-group name="radio" :value="data.radio">
					<quark-radio name="apple">{{ translate("fruits")[0] }}</quark-radio>
					<quark-radio name="blue">{{ translate("fruits")[1] }}</quark-radio>
				</quark-radio-group>
			</div>
			<div class="line" />
			<div class="form-item">
				<span>{{ translate("items")[0] }}</span>
				<quark-switch name="switch" />
			</div>
			<div class="line" />
			<div class="form-item">
				<span>{{ translate("items")[1] }}</span>
				<quark-rate name="rate" />
			</div>
			<div class="line" />
			<div class="form-item">
				<span>{{ translate("items")[2] }}</span>
				<quark-stepper name="step" />
			</div>
			<div class="line" />
			<div class="form-item">
				<span>{{ translate("items")[3] }}:</span>
				<quark-uploader name="uploader" iconcolor="#ccc" preview />
			</div>
			<div class="line" />
			<div class="form-item">
				<span>{{ translate("items")[4] }}</span>
				<quark-cell
					type="primary"
					:title="data.datepicker"
					isLink
					@click="click"
				></quark-cell>
				<quark-picker
					:title="translate('error.timePicker')"
					ref="pickerRef"
					:open="data.open"
					@close="close"
					@confirm="confirm"
					@change="change"
					name="picker"
				/>
			</div>
			<div class="line" />
			<div class="submit-wrap">
				<quark-button type="primary" class="submit" @click="submit3">{{
					translate("submit")
				}}</quark-button>
			</div>
		</quark-form>
	</div>
</template>

<script>
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("form");
import { useTranslate } from "@/sites/assets/util/useTranslate";
import { ref, onMounted, onBeforeUnmount, onBeforeMount } from "vue";
import "./index";
import Toast from "../toast";

export default createDemo({
	setup() {
		const data = ref({
			value: 10,
			open: false,
			datepicker: `${translate("error.timePicker")}`,
			// 异步
			field: "",
			textarea: "",
			checkbox1: true,
			checkbox2: false,
			radio: "",
			t: "",
		});
		const form1 = ref(null);
		const form2 = ref(null);
		const form3 = ref(null);
		const pickerRef = ref(null);
		onMounted(() => {
			form1.value.setRules([
				{ name: "name", required: true },
				{ name: "password", required: true, type: "password" },
			]);
			form2.value.setRules([
				{
					name: "field",
					required: true,
				},
				{
					name: "textarea",
					required: true,
				},
			]);
			const picker = pickerRef.value;
			picker.setColumns([
				{
					defaultIndex: 0,
					values: translate("calendaritem.weekdays"),
				},
				{
					defaultIndex: 1,
					values: translate("time"),
				},
			]);
			form2.value.setRules([
				{
					name: "age",
					required: true,
					message: `${translate("error.age")}`,
					validator: (value) => value >= 18,
				},
				{
					name: "phone",
					required: true,
					message: `${translate("error.formItem")}`,
					validator: (value) => /^1[3456789]\d{9}$/g.test(value),
				},
			]);
			form3.value.setRules([
				{
					name: "field",
					required: true,
				},
				{
					name: "textarea",
					required: true,
				},
			]);
		});
    onBeforeUnmount(() => {
			clearTimeout(data.value.t);
    })
		onBeforeMount(() => {
			useTranslate({
				"zh-CN": {
					title: {
						basic: "基础用法",
						rule: "自定义校验规则",
						items: "表单项大全",
					},
					labels: ["姓名", "密码", "年龄", "手机号"],
					vegetable: "蔬菜:",
					vegetables: ["黄瓜", "生姜"],
					fruit: "水果:",
					fruits: ["苹果", "香蕉"],
					items: ["开灯:", "打分:", "步进器:", "上传:", "picker 选择器:"],
					placeholder: "请输入文本",
					submit: "提交",
					error: {
						timePicker: "请选择时间",
						age: "不能小于18岁",
						phone: "请输入正确的手机号",
						formItem: "请检查表单项",
						items: "当前表单所有的值",
						console: "请在控制台查看表单值",
					},
					time: ["上午", "下午"],
				},
				"en-US": {
					title: {
						basic: "Basic Usage",
						rule: "Custom Rules",
						items: "Form Items",
					},
					labels: ["Name", "Password", "Age", "Phone"],
					vegetable: "Vegetables:",
					vegetables: ["Cucumber", "Ginger"],
					fruit: "Fruit:",
					fruits: ["Apple", "Banana"],
					items: ["Switch:", "Rate:", "Stepper:", "Upload:", "Picker:"],
					placeholder: "Please enter text",
					submit: "Submit",
					error: {
						timePicker: "Please select time",
						age: "Must not be younger than 18",
						phone: "please enter a valid phone number",
						formItem: "Please check the form item",
						items: "All values of the current form",
						console: "Please check the form value in the console",
					},
					time: ["a.m.", "p.m."],
				},
			});
		});

		const submit1 = () => {
			form1.value
				.getValues()
				.then((value) => {})
				.catch((err) => {
					Toast.text(err.message || `${translate("error.age")}`);
				});
		};

		const submit2 = () => {
			form2.value
				.getValues()
				.then((value) => {
					console.log(value, `${translate("error.items")}`);
				})
				.catch((err) => {
					// Toast.text(err.message || '请检查表单项');
				});
		};

		const submit3 = () => {
			form3.value
				.getValues()
				.then((value) => {
					Toast.text(`${translate("error.console")}`);
					console.log(value, "22");
				})
				.catch((err) => {
					console.log(err, "e");
					Toast.text(err.message || `${translate("error.formItem")}`);
				});
		};

		const click = () => {
			data.value.open = true;
		};

		const close = () => {
			data.value.open = false;
		};

		const confirm = ({ detail }) => {
			data.value.datepicker = detail.value.map((i) => i.value).join(" ");
			data.value.open = false;
		};

		return {
			data,
			form1,
			form2,
			form3,
			pickerRef,
			translate,
			submit1,
			submit2,
			submit3,
			click,
			close,
			confirm,
		};
	},
});
</script>

<style scoped src="./demo.scss"></style>
