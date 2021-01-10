import { render } from 'react-dom';
import './index.css';
import * as React from 'react';
import { TimelineViews, TimelineMonth, Agenda, ScheduleComponent, ViewsDirective, ViewDirective, ResourcesDirective, ResourceDirective, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';

import { extend } from '@syncfusion/ej2-base';
import { SampleBase } from './sample-base';
import * as dataSource from './datasource.json';
/**
 * schedule timeline resource grouping sample
 */
export class TimelineGrouping extends SampleBase {
    constructor() {
        super(...arguments);
        this.data = extend([], dataSource.resourceData.concat(dataSource.timelineResourceData), null, true);
        this.projectData = [
            { text: 'Alex', id: 1, color: '#cb6bb2' },
            { text: 'Michael', id: 2, color: '#56ca85' },
            { text: 'Daniel', id: 3, color: '#df5286' }
        ];
        this.categoryData = [
            { text: 'Red', id: 1, color: '#ff3333' },
            { text: 'Blue', id: 2, color: '#3333ff' },
            { text: 'Yellow', id: 3, color: '#ffff33' },
        ];
    }

    componentDidMount() {
        //this.scheduleObj.timeScale.enable = false;
    }

    render() {
        return (<div className='schedule-control-section'>
                <div className='col-lg-12 control-section'>
                    <div className='control-wrapper'>
                        <ScheduleComponent 
                          ref={(schedule) => this.scheduleObj = schedule}
                          cssClass='timeline-resource-grouping' 
                          width='1000px' height='650px' 
                          selectedDate={new Date()} 
                          currentView='TimelineWeek'
                          timeScale={{enable: false}}
                          eventSettings={{dataSource: this.data}}
                          group={{ byGroupID: false, resources: ['Resource', 'ProjectCode'], allowGroupEdit: true }}>
                            <ResourcesDirective>
                                <ResourceDirective field='ProjectId' title='Resource Name' name='Resource' allowMultiple={true} dataSource={this.projectData} textField='text' idField='id' colorField='color'>
                                </ResourceDirective>
                                <ResourceDirective field='TaskId' title='Project Code' name='ProjectCode' allowMultiple={true} dataSource={this.categoryData} textField='text' idField='id' colorField='color'>
                                </ResourceDirective>
                            </ResourcesDirective>
                            <ViewsDirective>
                                <ViewDirective option='TimelineWeek'/>
                            </ViewsDirective>
                            <Inject services={[TimelineViews, TimelineMonth, Agenda, Resize, DragAndDrop]}/>
                        </ScheduleComponent>
                    </div>
                </div>
            </div>);
    }
}

render(<TimelineGrouping />, document.getElementById('sample'));