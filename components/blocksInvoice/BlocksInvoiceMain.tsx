import BlockMain from '../common/BlockMain'
import EmailInvoice from '../common/EmailInvoice'
import { emailInvoice, flightInvoiceMain, invoiceMain } from './code'

const BlocksInvoiceMain = () => {
  return (
    <BlockMain>
      <div className="common__body overflow-x-hidden">
        <h2 className="cmn__title">Email & Invocie</h2>

        <div className="common__body__section pb__20">
          <div className="common__body__head pb__20">
            <h4>Flight Invoice</h4>
            <ul className="nav nav-pills" id="pills-tabblocksh5" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tabh5"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-homeblocksh5"
                  type="button"
                  role="tab"
                  aria-controls="pills-homeblocksh5"
                  aria-selected="true"
                >
                  Preview
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tabh5"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profileblcoksh5"
                  type="button"
                  role="tab"
                  aria-controls="pills-profileblcoksh5"
                  aria-selected="false"
                >
                  Html Code
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="pills-tabContent5trd">
            <div
              className="tab-pane fade show active"
              id="pills-homeblocksh5"
              role="tabpanel"
              aria-labelledby="pills-home-tabh5"
            ></div>
            <div
              className="tab-pane fade"
              id="pills-profileblcoksh5"
              role="tabpanel"
              aria-labelledby="pills-profile-tabh5"
            >
              {/* @TODO:Content */}
            </div>
          </div>
        </div>

        <div className="common__body__section pb__60">
          <div className="common__body__head pb__20">
            <h4>Train Invice</h4>
            <ul className="nav nav-pills" id="pills-tabblockshs" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tabhs"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-homeblockshs"
                  type="button"
                  role="tab"
                  aria-controls="pills-homeblockshs"
                  aria-selected="true"
                >
                  Preview
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tabhs"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profileblcokshs"
                  type="button"
                  role="tab"
                  aria-controls="pills-profileblcokshs"
                  aria-selected="false"
                >
                  Html Code
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="pills-tabContentrehs">
            <div
              className="tab-pane fade show active"
              id="pills-homeblockshs"
              role="tabpanel"
              aria-labelledby="pills-home-tabhs"
            ></div>
            <div
              className="tab-pane fade"
              id="pills-profileblcokshs"
              role="tabpanel"
              aria-labelledby="pills-profile-tabhs"
            >
              {/* @TODO:Content */}
            </div>
          </div>
        </div>

        <div className="common__body__section pb__60">
          <div className="common__body__head pb__20">
            <h4>Train Email</h4>
            <ul
              className="nav nav-pills"
              id="pills-tabblockshs1"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tabhs1"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-homeblockshs1"
                  type="button"
                  role="tab"
                  aria-controls="pills-homeblockshs1"
                  aria-selected="true"
                >
                  Preview
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tabhs1"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profileblcokshs1"
                  type="button"
                  role="tab"
                  aria-controls="pills-profileblcokshs1"
                  aria-selected="false"
                >
                  Html Code
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="pills-tabContentrehs1">
            <div
              className="tab-pane fade show active"
              id="pills-homeblockshs1"
              role="tabpanel"
              aria-labelledby="pills-home-tabhs1"
            >
              <EmailInvoice />
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcokshs1"
              role="tabpanel"
              aria-labelledby="pills-profile-tabhs1"
            >
              {/* @TODO:Content */}
            </div>
          </div>
        </div>

        <div className="common__body__section pb__60">
          <div className="common__body__head pb__20">
            <h4>Bus Invoice</h4>
            <ul
              className="nav nav-pills"
              id="pills-tabblockshs2"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tabhs2"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-homeblockshs2"
                  type="button"
                  role="tab"
                  aria-controls="pills-homeblockshs2"
                  aria-selected="true"
                >
                  Preview
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tabhs2buss"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profileblcokshs2buss"
                  type="button"
                  role="tab"
                  aria-controls="pills-profileblcokshs2buss"
                  aria-selected="false"
                >
                  Html Code
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="pills-tabContentrehs2">
            <div
              className="tab-pane fade show active"
              id="pills-homeblockshs2"
              role="tabpanel"
              aria-labelledby="pills-home-tabhs2"
            ></div>
            <div
              className="tab-pane fade"
              id="pills-profileblcokshs2buss"
              role="tabpanel"
              aria-labelledby="pills-profile-tabhs2buss"
            >
              {/* @TODO:Content */}
            </div>
          </div>
        </div>

        <div className="common__body__section pb__60">
          <div className="common__body__head pb__20">
            <h4>Bus Email</h4>
            <ul
              className="nav nav-pills"
              id="pills-tabblockshs3"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tabhs3"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-homeblockshs3"
                  type="button"
                  role="tab"
                  aria-controls="pills-homeblockshs3"
                  aria-selected="true"
                >
                  Preview
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tabhs2tes"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profileblcokshs3tes"
                  type="button"
                  role="tab"
                  aria-controls="pills-profileblcokshs3tes"
                  aria-selected="false"
                >
                  Html Code
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="pills-tabContentrehs3tre">
            <div
              className="tab-pane fade show active"
              id="pills-homeblockshs3"
              role="tabpanel"
              aria-labelledby="pills-home-tabhs3"
            >
              {/* Home Here  */}
              <EmailInvoice />
              {/* Home End  */}
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcokshs3tes"
              role="tabpanel"
              aria-labelledby="pills-profile-tabhs2tes"
            >
              {/* @TODO:Content */}
            </div>
          </div>
        </div>

        <div className="common__body__section pb__60">
          <div className="common__body__head pb__20">
            <h4>Car Email</h4>
            <ul
              className="nav nav-pills"
              id="pills-tabblockshs4i"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tabhs4i"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-homeblockshs4i"
                  type="button"
                  role="tab"
                  aria-controls="pills-homeblockshs4i"
                  aria-selected="true"
                >
                  Preview
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tabhs4i"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profileblcokshs4i"
                  type="button"
                  role="tab"
                  aria-controls="pills-profileblcokshs4i"
                  aria-selected="false"
                >
                  Html Code
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="pills-tabContentrehs4i">
            <div
              className="tab-pane fade show active"
              id="pills-homeblockshs4i"
              role="tabpanel"
              aria-labelledby="pills-home-tabhs4i"
            >
              <EmailInvoice />
            </div>
            <div
              className="tab-pane fade"
              id="pills-profileblcokshs4i"
              role="tabpanel"
              aria-labelledby="pills-profile-tabhs4i"
            >
              {/* @TODO:Content */}
            </div>
          </div>
        </div>
      </div>
    </BlockMain>
  )
}

export default BlocksInvoiceMain
