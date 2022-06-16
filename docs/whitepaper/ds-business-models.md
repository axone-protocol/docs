---
sidebar_position: 11
---

# DS Business Models

## How to price data, services & knowledge?

There is no unique way to price data, services & knowledge.  Nevertheless, a general and sensible approach to price data can be based on the cost of the workflow of services, operating on shared data, needed to create new data.  Value generated from the new created data can then be shared among data providers involved in the generation of the new data.  This original and general approach can be seen as a data sharing business model which rewards participants (i.e. data providers).  Another classical and general approach to price data is the data marketplace, which is also not uniquely defined intrinsically.  Regarding services, pricing is generally defined by service providers.  At OKP4, we propose generic templates, for both the data sharing and marketplace models, which allow the implementation of different business model templates based on user requirements.

## Requirements

User requirements can be of any kind.  Some users may need to share data in specific cases, for the common good and wealth, while others may want to acquire new data and knowledge for themselves as it may correspond to a strategic asset.  The OKP4 protocol allows users to achieve their requirements while abiding to the rules and regulations of the different dataspaces. 

## Introducing: business model templates

Different data sharing and marketplace business models can be implemented using generic templates proposed by OKP4.  These generic templates are fully parameterisable according to users needs such as : depth of (non)operating workflow of services considered for rewarding data providers, the importance of datasets for new data creation, the pricing algorithms of the data marketplaces, etc.

## Generic templates description

### Data sharing template

The generic template for the data sharing business models considers that the value associated to the new created data is a consequence of the different workflows of services which operate, or happened to operate, on shared data.  Therefore, the value of the created dataset is considered to be a function of the cost of these workflows.  The rewards of the data providers are based on the considered importance of their shared datasets in these workflows. 

### Data marketplace template
The generic template for the data marketplace models allows users to implement different dataset pricing algorithms.  Fixed price, first and second price sealed-bid auctions, and price defined as a function of time and usage are proposed among the different algorithms of the template.

### Link to OKP4 templates
The templates are available here : [https://github.com/okp4/kg-comput/blob/docs/theory/kg_comput_latex/kg-comput.pdf](https://github.com/okp4/kg-comput/blob/docs/theory-fr/kg_comput_latex/kg-comput.pdf)

## Parameters

### Data sharing template parameters

This template has the following parameters:

- an offset (xi > 0), which allows the computation of the knowledge value, i.e created dataset value, as a function of the cost of the associated workflow of services operating on shared datasets    
- weights (alphas >=0), which characterize the importance of each shared dataset in the workflows of services linked to the created dataset 
- a last rewarded rank (N>=0), which allows the computation of rewards for data providers, across the different workflows, up to this rank

### Data marketplace template parameters

This template has the following parameters:

- auction time-interval, which sets the start and end of the auction bidding process
- dataset reserved price, which set a price threshold under which a dataset will not be sold
- weight parameters (psi and phi > 1), which allows dataset price to be defined as a function of time and usage
