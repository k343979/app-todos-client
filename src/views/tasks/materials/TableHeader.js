// アーカイブ用テーブルヘッダー
const archives = [
    {
        text: "Name",
        align: "start",
        cellClass: "border-bottom",
        sortable: false,
        value: "name",
        class: "text-secondary font-weight-bolder opacity-7 border-bottom ps-6",
    },
    {
        text: "Email",
        value: "email",
        class: "text-secondary font-weight-bolder opacity-7",
    },
    {
        text: "Age",
        value: "age",
        class: "text-secondary font-weight-bolder opacity-7",
    },
    {
        text: "Salary",
        value: "salary",
        class: "text-secondary font-weight-bolder opacity-7",
    },
    {
        text: "Actions",
        value: "actions",
        sortable: false,
        class: "text-secondary font-weight-bolder opacity-7",
    },
];

// 完了タスク用テーブルヘッダー
const dones = [
    {
        text: "Name",
        align: "start",
        cellClass: "border-bottom",
        sortable: false,
        value: "name",
        class: "text-secondary font-weight-bolder opacity-7 border-bottom ps-6",
    },
    {
        text: "Email",
        value: "email",
        class: "text-secondary font-weight-bolder opacity-7",
    },
    {
        text: "Age",
        value: "age",
        class: "text-secondary font-weight-bolder opacity-7",
    },
    {
        text: "Salary",
        value: "salary",
        class: "text-secondary font-weight-bolder opacity-7",
    },
    {
        text: "Actions",
        value: "actions",
        sortable: false,
        class: "text-secondary font-weight-bolder opacity-7",
    },
];

export default {
    archives,
    dones
}