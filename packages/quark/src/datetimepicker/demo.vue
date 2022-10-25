<template>
	<div class="demo">
		<h2>{{ translate("title.basic") }}</h2>
		<quark-cell-group>
			<quark-cell
				type="primary"
				:title="translate('title.date')"
				islink
				@click="visibleHandle('date')"
			></quark-cell>
		</quark-cell-group>
		<quark-datetime-picker
			ref="datetimePickerRef"
			type="date"
			:value="currentDate"
			:title="translate('title.date')"
			:open="dateVisible"
			:mindate="minDate"
			:maxdate="maxDate"
			:confirmbuttontext="translate('button.confirm')"
			:cancelbuttontext="translate('button.cancel')"
			@close="visibleHandle('date', false)"
			@confirm="(detail) => confirm('date', detail)"
		>
		</quark-datetime-picker>
		<quark-cell-group>
			<quark-cell
				type="primary"
				:title="translate('title.yearMonth')"
				islink
				@click="visibleHandle('year-month')"
			></quark-cell>
		</quark-cell-group>
		<quark-datetime-picker
			ref="yearMonthRef"
			type="year-month"
			:title="translate('title.yearMonth')"
			:open="yearMonthVisible"
			:mindate="minDate"
			:maxdate="maxDate"
			@close="visibleHandle('year-month', false)"
			@confirm="(detail) => confirm('year-month', detail)"
		>
		</quark-datetime-picker>

		<quark-cell-group>
			<quark-cell
				type="primary"
				:title="translate('title.monthDay')"
				islink
				@click="visibleHandle('month-day')"
			></quark-cell>
		</quark-cell-group>
		<quark-datetime-picker
			ref="monthDayRef"
			type="month-day"
			:title="translate('title.monthDay')"
			:open="monthDayVisible"
			@close="visibleHandle('month-day', false)"
			@confirm="(detail) => confirm('month-day', detail)"
		>
		</quark-datetime-picker>

		<quark-cell-group>
			<quark-cell
				type="primary"
				:title="translate('title.time')"
				islink
				@click="visibleHandle('time')"
			></quark-cell>
		</quark-cell-group>
		<quark-datetime-picker
			ref="timePicekerRef"
			type="time"
			:value="currentTime"
			:title="translate('title.time')"
			:open="timeVisible"
			:minhour="10"
			:maxhour="22"
			:minminute="5"
			:maxminute="45"
			:bottomhidden="true"
			@close="visibleHandle('time', false)"
			@confirm="(detail) => confirm('time', detail)"
			@change="change"
		>
		</quark-datetime-picker>

		<quark-cell-group>
			<quark-cell
				type="primary"
				:title="translate('title.datetime')"
				islink
				@click="visibleHandle('datetime')"
			></quark-cell>
		</quark-cell-group>
		<quark-datetime-picker
			ref="datetimeRef"
			type="datetime"
			:title="translate('title.datetime')"
			:open="datetimeVisible"
			:mindate="minDate"
			:maxdate="maxDate"
			@close="visibleHandle('datetime', false)"
			@confirm="(detail) => confirm('datetime', detail)"
		>
		</quark-datetime-picker>

		<quark-cell-group>
			<quark-cell
				type="primary"
				:title="translate('title.datehour')"
				islink
				@click="visibleHandle('datehour')"
			></quark-cell>
		</quark-cell-group>
		<quark-datetime-picker
			type="datehour"
			:title="translate('title.datehour')"
			:open="datehourVisible"
			@close="visibleHandle('datehour', false)"
			@confirm="(detail) => confirm('datehour', detail)"
		>
		</quark-datetime-picker>
		<quark-cell-group>
			<quark-cell
				type="primary"
				:title="translate('title.head')"
				islink
				@click="visibleHandle('custom')"
			></quark-cell>
		</quark-cell-group>
		<quark-datetime-picker
			:title="translate('title.head')"
			type="date"
			:open="customToolbarVisible"
			:mindate="minDate"
			:maxdate="maxDate"
			:showtoolbar="true"
			@close="visibleHandle('custom', false)"
			@confirm="(detail) => confirm('custom', detail)"
		>
		</quark-datetime-picker>

		<quark-cell-group>
			<quark-cell
				type="primary"
				:title="translate('title.setValue')"
				islink
				@click="visibleHandle('setValue')"
			></quark-cell>
		</quark-cell-group>
		<quark-datetime-picker
			ref="setValueRef"
			:title="translate('title.setValue')"
			type="date"
			:open="setValueVisible"
			:mindate="minDate"
			:maxdate="maxDate"
			:showtoolbar="true"
			@close="visibleHandle('setValue', false)"
			@confirm="(detail) => confirm('setValue', detail)"
		>
		</quark-datetime-picker>

	</div>
</template>

<script>
import { createComponent } from "@/utils/create";
const { createDemo, translate } = createComponent("cascadepicker");
import { useTranslate } from "@/sites/assets/util/useTranslate";
import { ref, onMounted, onBeforeMount } from "vue";
import "./index";
import Toast from "../toast/index";

export default createDemo({
	setup() {
		const open = ref(false);
		const dateVisible = ref(false);
		const yearMonthVisible = ref(false);
		const monthDayVisible = ref(false);
		const timeVisible = ref(false);
		const datetimeVisible = ref(false);
		const datehourVisible = ref(false);
		const customToolbarVisible = ref(false);
		const setValueVisible = ref(false);

		const minDate = ref('2020-10-01');
		const maxDate = ref('2025-08-13');
		const currentDate = ref('2021-11-30')
		const currentTime = ref('16:01');

		const datetimePickerRef = ref();
		const timePicekerRef = ref();
		const yearMonthRef = ref();
		const monthDayRef = ref();
		const datetimeRef = ref();
		const setValueRef = ref();

		onBeforeMount(() => {
			useTranslate({
				"zh-CN": {
					title: {
						basic: "基础用法",
						head: "自定义头部",
						date: '选择年月日',
						yearMonth: '选择年月',
						monthDay: '选择月日',
						time: '选择时间',
						datetime: '选择完整时间',
						datehour: '选择年月日小时',
						setValue: '设置当前时间',
					},
					button: {
						cancel: "取消",
						confirm: "确定",
					},
					year: '年',
					month: '月',
					day: '日',
					hour: '时',
					minute: '分',
				},
				"en-US": {
					title: {
						basic: "Basic Usage",
						head: "Custom Head",
						date: 'Choose Date',
						yearMonth: 'Choose Year-Month',
						monthDay: 'Choose Month-Day',
						time: 'Choose Time',
						datetime: 'Choose Datetime',
						datehour: 'Choose DateHour',
						setValue: 'Set current date',
					},
					button: {
						cancel: "Cancel",
						confirm: "Confirm",
					},
					year: 'Year',
					month: 'Month',
					day: 'Day',
					hour: 'Hour',
					minute: 'Minute',
				},
			});
		});
		const formatter = (type, val) => {
      if (type === 'year') {
        return `${val}${translate('year')}`;
      }
      if (type === 'month') {
        return `${val}${translate('month')}`;
      }
			if (type === 'day') {
        return `${val}${translate('day')}`;
      }
      return val;
    };

		onMounted(() => {
			yearMonthRef.value.setFormatter(formatter);
			monthDayRef.value.setFormatter(formatter);

			timePicekerRef.value.setFormatter((type, val) => {
				if (type === 'hour') {
					return `${val}${translate('hour')}`;
				}
				if (type === 'minute') {
					return `${val}${translate('minute')}`;
				}
				return val;
			});
			timePicekerRef.value.setFilter(filter);
		});

		const filter = (type, options) => {
      if (type === 'minute') {
        return options.filter((option) => Number(option) % 5 === 0);
      }
      return options;
    };

		const visibleHandle = (type, visible = true) => {
			if(type === 'date') {
				dateVisible.value = visible;
			} else if(type === 'year-month') {
				yearMonthVisible.value = visible
			} else if(type ==='month-day') {
				monthDayVisible.value = visible;
			} else if(type === 'time') {
				timeVisible.value = visible;
			} else if(type ==='datetime') {
				datetimeVisible.value = visible;
			} else if(type ==='datehour') {
				datehourVisible.value = visible;
			} else if(type === 'custom') {
				customToolbarVisible.value = visible;
			} else if(type === 'setValue') {
				if(visible === true) {
					setValueRef.value.setValue('2023-10-07');
					// setValueRef.value.setValue('10:20'); // type 为 time
				}
				setValueVisible.value = visible;
			}
		}

		const confirm = (type, { detail }) => {
			visibleHandle(type, false);

			if(type === 'time') {
				Toast.text(`${detail.value}`);
				return;
			}
			const year = detail.value.getFullYear();
			const month = detail.value.getMonth() + 1;
			const day = detail.value.getDate();
			const hour = detail.value.getHours();
			const minute = detail.value.getMinutes();
			if(type === 'date' || type === 'custom' || type === 'setValue') {
				Toast.text(`${year}年${month}月${day}日`);
			} else if(type === 'year-month') {
				Toast.text(`${year}年${month}月`);
			} else if(type === 'month-day') {
				Toast.text(`${month}月${day}日`);
			} else if(type === 'datetime') {
				Toast.text(`${year}年${month}月${day}日 ${hour}:${minute}`);
			} else if(type === 'datehour') {
				Toast.text(`${year}年${month}月${day}日 ${hour}时`);
			}
		};

		const change = ({ detail }) => {
			console.log(detail.value)
		};

		return {
			open,
			confirm,
			change,
			translate,
			minDate,
			maxDate,
			currentDate,
			dateVisible,
			yearMonthVisible,
			monthDayVisible,
			timeVisible,
			datetimeVisible,
			datehourVisible,
			customToolbarVisible,
			visibleHandle,
			currentTime,
			datetimePickerRef,
			timePicekerRef,
			yearMonthRef,
			monthDayRef,
			datetimeRef,
			setValueVisible,
			setValueRef,
		};
	},
});
</script>
<style src="./demo.scss"></style>
