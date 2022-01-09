import React from 'react'
import { WebAppEntries } from './WebAppEntries'
import { useSelector } from 'react-redux'
import { Tab, Tabs, TabPanel ,TabList} from 'react-tabs';

export const WebAppProfileScreen = () => {

    // const {name} = useSelector(state => state.auth)
    const {active} = useSelector(state => state.notes)

    return (
        <div className="webapp__main-content-profile">
            <section className="webbapp_section-profile">
            <div className="webapp__entry-picture">       
                    <a 
                        href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGzkkRrH-rt3lfZU1VIa0dBXVFhPqU77AYaw&usqp=CAU"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGzkkRrH-rt3lfZU1VIa0dBXVFhPqU77AYaw&usqp=CAU" width="75" height="75" alt="imagen"/>
                    </a>
                </div>   
            </section>
    
            <section className="webbapp-section">
                <Tabs>
                <TabList>
                <Tab>POSTS</Tab>
                <Tab>FAVORITES</Tab>
                </TabList>

                <TabPanel>
                    <div>
                        {
                            (active)
                            ? (console.log("selecciono un elemento"))
                            : (console.log("no selecciono ningun elemento"))
                        }
                        <WebAppEntries/>
                    </div>

                </TabPanel>
                <TabPanel>
                <p>
                    <b>Luigi</b> (<i>Japanese: ルイージ Hepburn: Ruīji, [ɾɯ.iː.dʑi̥]</i>) (<i>English: /luˈiːdʒi/;
                    Italian: [luˈiːdʒi]</i>) is a fictional character featured in video games and related media
                    released by Nintendo. Created by prominent game designer Shigeru Miyamoto, Luigi is portrayed
                    as the slightly younger but taller fraternal twin brother of Nintendo's mascot Mario, and
                    appears in many games throughout the Mario franchise, often as a sidekick to his brother.
                </p>
                <p>
                    Source:{' '}
                    <a href="https://en.wikipedia.org/wiki/Luigi" target="_blank">
                    Wikipedia
                    </a>
                </p>
                </TabPanel>

            </Tabs>

            </section>
 
        </div>
    )
}
