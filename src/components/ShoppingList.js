export default function ShoppingList() {
    return(
        <div className="shopping-list">

            <form>
                <input id="item" type="text" placeholder="Item"/> <input type="text" id="price" placeholder="Price" /><button>Add</button>
            </form>

            <table>
                <tr>
                    <td>Mouse</td>
                    <td>7000</td>
                </tr>
            </table>
        </div>
    );
}