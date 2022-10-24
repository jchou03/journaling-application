import './Journal.css';

function Journal(props){
    return (
        <div id="journal">
            {/* row seperating the two pages of the journal */}
            <div class="book_page" id="left">
                <div id="cur_goals" class="journal_part">
                    <h3>current goals:</h3>
                    <section contenteditable="true">
                        {props.cur_goals}
                    </section> 
                </div>
                <div id="core_values" class="journal_part">
                    <h3>core values:</h3>
                    <section contenteditable="true">
                        {props.core_values}    
                    </section> 
                </div>
                <div id="to_do" class="journal_part">
                    <h3>to-do:</h3>
                    <section id="textarea" contenteditable="true">
                    <ul>
                        <li>{props.to_do}</li>
                    </ul>

                    </section>
                </div>
            </div>

            <div class="vl"></div>

            <div class="book_page" id="right">
                <h3>Journal</h3>
                <section contenteditable="true">
                </section>

                <div id="page_arrows">
                    <button id="left_arrow">page_left</button>
                    <button id="right_arrow">page_right</button>
                </div>
            </div> 
        </div>
    )
}

export default Journal;

