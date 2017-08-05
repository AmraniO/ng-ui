import { LogicalOperatorEnum } from "../enums/logical-operator.enum";

/**
 * Action
 */
export class Action {
    constructor() {      
    }

    sort(data: any[], fieldName: string, sortAsc: boolean) {
        let reverse = (sortAsc ? 1 : -1);

        return data.slice().sort((a, b) => {        
            if (a[fieldName] < b[fieldName]) {
            return -reverse;
            } else if (b[fieldName] < a[fieldName]) {
            return reverse;
            } else {
            return 0;
            }
        });
    }

    search(data: any[], fieldName: string, value: string, logicalOperatorValue: string) {
        if (!value) return data;

        //logicalOperatorValue.match()
        return data.filter(d => {
            switch (logicalOperatorValue) {
                case LogicalOperatorEnum[LogicalOperatorEnum.equal]:
                    return d[fieldName] == value;

                case LogicalOperatorEnum[LogicalOperatorEnum.match]:
                    return d[fieldName].toString().match(value);

                case LogicalOperatorEnum[LogicalOperatorEnum.greaterThan]:
                    return d[fieldName] > value;

                case LogicalOperatorEnum[LogicalOperatorEnum.lessThan]:
                    return d[fieldName] < value;
            }
        });
    }
}