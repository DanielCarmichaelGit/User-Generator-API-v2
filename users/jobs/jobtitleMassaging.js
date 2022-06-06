const fs = require('fs');

var arts = {arts:fs.readFileSync('users/jobs/arts/jobs.txt', {encoding: 'utf8'}).split("\n")};
var fashion = {fashion:fs.readFileSync('users/jobs/fashion/jobs.txt', {encoding: 'utf8'}).split("\n")};
var finance = {finance:fs.readFileSync('users/jobs/finance/jobs.txt', {encoding: 'utf8'}).split("\n")};
var healthcare = {healthcare:fs.readFileSync('users/jobs/healthcare/jobs.txt', {encoding: 'utf8'}).split("\n")};
var hr = {hr:fs.readFileSync('users/jobs/hr/jobs.txt', {encoding: 'utf8'}).split("\n")};
var management = {management:fs.readFileSync('users/jobs/management/jobs.txt', {encoding: 'utf8'}).split("\n")};
var manufacturing = {manufacturing:fs.readFileSync('users/jobs/manufacturing/jobs.txt', {encoding: 'utf8'}).split("\n")};
var marketing = {marketing:fs.readFileSync('users/jobs/marketing and advertising/jobs.txt', {encoding: 'utf8'}).split("\n")};
var nursing = {nursing:fs.readFileSync('users/jobs/nursing/jobs.txt', {encoding: 'utf8'}).split("\n")};
var retail = {retail:fs.readFileSync('users/jobs/retail/jobs.txt', {encoding: 'utf8'}).split("\n")};
var sales = {sales:fs.readFileSync('users/jobs/sales/jobs.txt', {encoding: 'utf8'}).split("\n")};
var science = {science:fs.readFileSync('users/jobs/science/jobs.txt', {encoding: 'utf8'}).split("\n")};
var security = {security:fs.readFileSync('users/jobs/security and law enforcement/jobs.txt', {encoding: 'utf8'}).split("\n")};
var teaching = {teaching:fs.readFileSync('users/jobs/teaching/jobs.txt', {encoding: 'utf8'}).split("\n")};
var tech = {tech:fs.readFileSync('users/jobs/tech/jobs.txt', {encoding: 'utf8'}).split("\n")};
var therapy = {therapy:fs.readFileSync('users/jobs/therapy/jobs.txt', {encoding: 'utf8'}).split("\n")};
var trades = {trades:fs.readFileSync('users/jobs/trades/jobs.txt', {encoding: 'utf8'}).split("\n")};
var transportation = {transportation:fs.readFileSync('users/jobs/transportation/jobs.txt', {encoding: 'utf8'}).split("\n")};



therapy = therapy.therapy.map(function(job) {
    return {job: job, estimatedSalary: parseInt(therapy.therapy[therapy.therapy.length - 1])}
})

arts = arts.arts.map(function(job) {
    return {job: job, estimatedSalary: parseInt(arts.arts[arts.arts.length - 1])}
})

fashion =fashion.fashion.map(function(job) {
    return {job: job, estimatedSalary: parseInt(fashion.fashion[fashion.fashion.length - 1])}
})

finance = finance.finance.map(function(job) {
    return {job: job, estimatedSalary: parseInt(finance.finance[finance.finance.length - 1])}
})

healthcare = healthcare.healthcare.map(function(job) {
    return {job: job, estimatedSalary: parseInt(healthcare.healthcare[healthcare.healthcare.length - 1])}
})

hr = hr.hr.map(function(job) {
    return {job: job, estimatedSalary: parseInt(hr.hr[hr.hr.length - 1])}
})

management = management.management.map(function(job) {
    return {job: job, estimatedSalary: parseInt(management.management[management.management.length - 1])}
})

manufacturing = manufacturing.manufacturing.map(function(job) {
    return {job: job, estimatedSalary: parseInt(manufacturing.manufacturing[manufacturing.manufacturing.length - 1])}
})

marketing = marketing.marketing.map(function(job) {
    return {job: job, estimatedSalary: parseInt(marketing.marketing[marketing.marketing.length - 1])}
})

nursing = nursing.nursing.map(function(job) {
    return {job: job, estimatedSalary: parseInt(nursing.nursing[nursing.nursing.length - 1])}
})

retail = retail.retail.map(function(job) {
    return {job: job, estimatedSalary: parseInt(retail.retail[retail.retail.length - 1])}
})

sales = sales.sales.map(function(job) {
    return {job: job, estimatedSalary: parseInt(sales.sales[sales.sales.length - 1])}
})

science = science.science.map(function(job) {
    return {job: job, estimatedSalary: parseInt(science.science[science.science.length - 1])}
})

security = security.security.map(function(job) {
    return {job: job, estimatedSalary: parseInt(security.security[security.security.length - 1])}
})

teaching = teaching.teaching.map(function(job) {
    return {job: job, estimatedSalary: parseInt(teaching.teaching[teaching.teaching.length - 1])}
})

tech = tech.tech.map(function(job) {
    return {job: job, estimatedSalary: parseInt(tech.tech[tech.tech.length - 1])}
})

trades = trades.trades.map(function(job) {
    return {job: job, estimatedSalary: parseInt(trades.trades[trades.trades.length - 1])}
})

transportation = transportation.transportation.map(function(job) {
    return {job: job, estimatedSalary: parseInt(transportation.transportation[transportation.transportation.length - 1])}
})

console.log(therapy)