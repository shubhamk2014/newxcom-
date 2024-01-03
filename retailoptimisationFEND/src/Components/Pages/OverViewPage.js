import React, { useState } from "react";
import { Layout, Select, Menu, Card, Row, Col, Button } from "antd";
import { filterData } from "../constants.js"; // Update the path based on your file structure
import SalesComparisonDBC from "../charts/SalesComparisonDBC.js";
import SalesSplit from "../charts/SalesSplit.js";
import IncrementBreakUp from "../charts/IncrementBreakUp.js";
import TableChart from "../tables/TableChart.js";
const { Option } = Select;
const { Content } = Layout;

function OverViewPage() {
  const [filters, setFilters] = useState({});
  const [isBrandOverview, setBrandOverview] = useState(true);

  const [retailerOptions, setRetailerOptions] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [brandOptions, setBrandOptions] = useState([]);

  const handleMarketChange = (value) => {
    setFilters({ ...filters, market: value });
    const selectedMarket = filterData._result.marketList.find(
      (market) => market.value === value
    );

    if (selectedMarket) {
      setRetailerOptions(filterData._result.retailerList);
    } else {
      setRetailerOptions([]);
    }
  };

  const handleRetailerChange = (value) => {
    setFilters({ ...filters, retailer: value });
    const selectedRetailer = filterData._result.retailerList.find(
      (retailer) => retailer.value === value
    );
    if (selectedRetailer) {
      setCategoryOptions(filterData._result.categoryList);
    } else {
      setCategoryOptions([]);
    }
  };
  const handleCategoryChange = (value) => {
    setFilters({ ...filters, category: value });
    const selectedCategory = filterData._result.categoryList.find(
      (category) => category.value === value
    );
    if (selectedCategory) {
      setBrandOptions(filterData._result.brandList);
    } else {
      setBrandOptions([]);
    }
  };
  const handleBrandChange = (value) => {
    setFilters({ ...filters, brand: value });
  };

  return (
    <Layout className="layout">
      <Content>
        <Row gutter={80} style={{}}>
          <Col>
            <label>Market</label>
          </Col>
          <Col>
            <Select
              placeholder="All Markets"
              style={{}}
              onChange={handleMarketChange}
            >
              {filterData._result.marketList.map((market) => (
                <Option key={market.value} value={market.value}>
                  {market.label}
                </Option>
              ))}
            </Select>
          </Col>
          <Col>
            <label>Retailer</label>
          </Col>
          <Col>
            <Select
              placeholder="All Retailers"
              onChange={handleRetailerChange}
              disabled={retailerOptions.length === 0}
            >
              {retailerOptions.map((retailer) => (
                <Option key={retailer.value} value={retailer.value}>
                  {retailer.label}
                </Option>
              ))}
            </Select>
          </Col>
          <Col>
            <label>Categories</label>
          </Col>
          <Col>
            <Select
              placeholder="All Categories"
              style={{}}
              onChange={handleCategoryChange}
              disabled={categoryOptions.length === 0}
            >
              {categoryOptions.map((category) => (
                <Option key={category.value} value={category.value}>
                  {category.label}
                </Option>
              ))}
            </Select>
          </Col>
          <Col>
            <label>Brands</label>
          </Col>
          <Col >
            <Select
              placeholder="All Brands"
              style={{}}
              onChange={handleBrandChange}
              disabled={brandOptions.length === 0}
            >
              {brandOptions.map((brand) => (
                <Option key={brand.value} value={brand.value}>
                  {brand.label}
                </Option>
              ))}
            </Select>
          </Col>
        </Row>
        <Row gutter={0} style={{}}>
          <Card style={{width:"100%"}}>
            <Button
              type="text"
              style={{
                borderBottom: isBrandOverview ? "2px solid blue" : "none",
                color: isBrandOverview ? "blue" : "inherit",
             width:"150px" }}
              onClick={() => setBrandOverview(true)}
            >
              Brand Overview
            </Button>
            <Button
              type="text"
              style={{
                borderBottom: !isBrandOverview ? "2px solid blue" : "none",
                color: !isBrandOverview ? "blue" : "inherit",
                width:"150px" 
              }}
              onClick={() => setBrandOverview(false)}
            >
              Brand Deepdive
            </Button>
          </Card>
        </Row>

        {isBrandOverview ? (
          <Row gutter={5}>
            <Col span={8}>
              <Card>
                <SalesComparisonDBC />
              </Card>
            </Col>
            <Col span={8}>
              <Card>
                <SalesSplit />
              </Card>
            </Col>
            <Col span={8}>
              <Card>
                <IncrementBreakUp />
              </Card>
            </Col>
          </Row>
        ) : (
          <h1>Hello</h1>
        )}
        <Row gutter={20}>
        <Col span={12}>
              <Card>
               <TableChart/>
              </Card>
            </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default OverViewPage;
