---
sidebar_position: 11
---

# DS Business Models

## How to price data, services & knowledge?

There is no unique way to price data, services & knowledge.  Today, the vast majority of transactions around data happen at a fixed price posted upfront or through long negotiations. These approaches work for now but are very inefficient.

These pricing models are usually opaque and its hard to compare datasets with each other, which benefits few large players who have an overview of the data market. The fixed price model also benefits larger players who can derive more value from data than a smaller player due to economies of scale (more data) and economies of scope (more variety of data). Finally, negotiations are very inneficient and create a lot of friction that prevents the data market to be scalable.

We envision a world where data (proprietary or not) is readily available for data applications, where knowledge can flow seamlessly from data provider to knowledge consumer. Given the issues mentioned above, it's fair to say that we need new mechanisms for the data economy.

At OKP4, we propose generic templates, for both the data sharing and marketplace models, which allow the implementation of different business model templates based on user requirements.

## Introducing: business model templates

Different data sharing business models can be implemented using generic templates proposed by OKP4.  These generic templates are fully parameterisable according to users needs such as : depth of (non)operating workflow of services considered for rewarding data providers, the importance of datasets for new data creation, the pricing algorithms of the data marketplaces, etc.

## Generic templates description

### Service-based pricing template

A general and sensible approach to price data can be based on the cost of the workflow of services operating on shared data needed to create desired new data.  Value generated from the new created data can then be shared among data providers involved in the generation of the new data.
The generic template for service-based pricing considers that the value associated to the new created data is a consequence of the different workflows of services which operate, or happened to operate, on shared data.  Therefore, the value of the created dataset is considered to be a function of the cost of these workflows.  The rewards of the data providers are based on the considered importance (weights) of their shared datasets in these workflows.

### Data-based pricing template

Another approach to price data is to consider datasets and services as atomic units with their own prices. There is no weights involved. These prices are added up to define the price of a workflow. While services pricing is fixed and defined by the providers (on a time-based basis or per use basis), datasets pricing can be fixed or dynamic as our template allows users to implement different dataset pricing algorithms.  Fixed price, first and second price sealed-bid auctions, and price defined as a function of time and number of purchases are proposed among the different algorithms of the template.

## Parameters

### Service-based template parameters

This template has the following parameters:

- an offset (&xi; > 0), which allows the computation of the knowledge value, i.e created dataset value, as a function of the cost of the associated workflow of services operating on shared datasets
- weights (&alpha;<sub>in</sub> >=0), which characterize the importance of each shared dataset in the workflows of services linked to the created dataset
- a last rewarded rank (N >=0), which allows the computation of rewards for data providers, across the different workflows, up to this rank

### Data-based template parameters

This template has the following parameters:

- auction time-interval, which sets the start and end of the auction bidding process
- dataset reserved price, which set a price threshold under which a dataset will not be sold
- weight parameters (&psi; and &#632; > 1), which allows dataset price to be defined as a function of time and number of purchases.
