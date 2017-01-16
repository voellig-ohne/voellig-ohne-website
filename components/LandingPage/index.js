import React from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'
import Project from 'components/Project'
import { map } from 'lodash'

import style from './style.module.less'

export default class LandingPage extends React.Component {
    render () {
        const { projects } = this.props;

        return (
            <div>
                <div className={classNames(style.container, 'vo-section_wrapper')}>
                    <div className="vo-section">
                        <em>völlig ohne</em> ist ein Labor für Gestaltung. Unsere Arbeit ist ein 
                        organischer Prozess, in dem technische und künstlerische Fähigkeiten 
                        unmittelbar ineinandergreifen. Ausgangspunkt ist ein Anliegen, das 
                        wir auf seinen Kern reduzieren. Den Nährboden bilden neueste 
                        Webtechnologien und außergewöhnliche grafische Ideen. In unseren 
                        Händen wird so aus dem Keim – nach sorgfältiger und liebevoller 
                        Aufzucht – ein aufregendes alternatives Kommunikationskonzept. 
                        Wie alles Gewachsene ist es natürlich schön, jede Zelle sinnvoller 
                        Teil eines Ganzen.
                    </div>

                    <ul className={style.project_list}>
                        { map(projects, (project) => {
                            return (
                                <Project key={project.path} 
                                    className={style.project}
                                    page={project} />                
                            )
                        })}
                    </ul>
                </div>


            </div>
        )
    }
}