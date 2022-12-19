---
sidebar_position: 5
---

# Validator Security Checklist

:::info
 Conduct a security checklist survey to go through the security measures of a validator
:::

## Conduct Survey on General Controls of Hosting Data Centre

Perform a survey on the hosting data centre, and compare your result with the best practice suggested below

For example, your hosting data centre should have following features

| Controls Category | Description of Best Practice    |
|-------------------|---------------------------------|
| Data Center       | Redundant Power                 |
| Data Center       | Redundant Cooling               |
| Data Center       | Redundant Networking            |
| Data Center       | Physical Cage/Gated Access      |
| Data Center       | Remote Alerting Security Camera |

## Current Status of Node Setup

Perform a survey on your current status of node setup, and compare your result with the best practice suggested below

| Controls Category                | Description of Best Practice                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|----------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| General System Security          | Operating system appropriately patched. Kernel is updated to latest stable version. The node should be operated in x86_64 environment                                                                                                                                                                                                                                                                                                                                                                                                   |
| General System Security          | Auto-updates for operation system is configured. Toolkit for automatic upgrades exists (e.g. auter, yum-cron, dnf-automatic, unattended-upgrades)                                                                                                                                                                                                                                                                                                                                                                                       |
| General System Security          | Security framework enabled and enforcing. SELinux / AppArmor / Tomoyo / Grsecurity Enabled.                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| General System Security          | No insecure and unnecessary services Installed. (e.g. telnet, rsh, inetd, etc ...)                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| General System Security          | GRUB boot loader password is configured. Grub2 configured with password                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| General System Security          | Only root permissions on core system files                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| File Directory Security          | Secure the directory `~/.okp4d` to be accessible by owner only                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Binary Configuration             | Recommend the following settings in config.toml for both performance and security - For **sentry nodes**: `max_num_inbound_peers = 500, max_num_outbound_peers = 50, flush_throttle_timeout = "300ms"` - For **validator node**: `max_num_inbound_peers = 100, max_num_outbound_peers = 10, flush_throttle_timeout = "100ms"`                                                                                                                                                                                                           |
| Account Security & Remote Access | Following Password policies are enforced: No Blank Passwords; Weak Passwords Not Allowed                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Account Security & Remote Access | Following SSH configurations are enabled: PermitRootLogin: `no`; PasswordAuthentication `no`; ChallengeResponseAuthentication `no`; UsePAM `yes`; AllowUsers `Necessary user only`; AllowGroups `Necessary group only`.                                                                                                                                                                                                                                                                                                                 |
| Networking                       | Network throughput test using speedtest. Recommend to have at least 5 Mbps upload, 5 Mbps download)                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Networking                       | Host-based (e.g. iptables) or cloud-based (e.g. AWS Security Group) firewall is enabled to protect all the involved nodes. Remote management ports (e.g. SSH - TCP 22) should only be exposed to selected IP instead of the internet. No overly permissive rules (e.g. wide range of allowed ports 1-65535) should be set. For internal communication channels between nodes, they should be set with specific source and destination addresses. For internet reachable nodes, set TCP 26656 to be the only incoming port, if possible. |
| Networking                       | Intrusion Detection / Prevention System (e.g. Fail2Ban, Snort, OSSEC) is installed and enforcing                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Networking                       | Setup sentry node architecture to protect validator node, and set firewall rules to restrict direct internet access to it.                                                                                                                                                                                                                                                                                                                                                                                                              |
| Networking                       | The Remote Procedure Call (RPC) provides sensitive operations and information that is not supposed to be exposed to the Internet. By default, RPC is on and allow connection from `127.0.0.1` only. Please be extremely careful if you need to allow RPC from other IP addresses.                                                                                                                                                                                                                                                         |
| Redundancy                       | Hot standby node is setup with the same configuration as main node                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Redundancy                       | System monitoring and alerting is setup to alert owners on anomalies                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Key Management                   | Setup [Tendermint KMS](./kms.md) with HSM or equivalent online service, which should replace the static key file.                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| DDOS                             | Setup validator in accordance with sentry architecture. Kindly refer to the setup [instruction](https://docs.tendermint.com/master/nodes/validators.html#setting-up-a-validator) and [detailed description](https://forum.cosmos.network/t/sentry-node-architecture-overview/454).                                                                                                                                                                                                                                                      |

## Backup

:::info
Learn how to backup your validator.
:::

It is ***crucial*** to backup your validator's private key. It's the only way to restore your validator in the event of a disaster.

The validator private key is a Tendermint Key: a unique key used to sign consensus votes.

To backup everything you need to restore your validator, note that if you are using the "software sign" (the default signing method of Tendermint), your Tendermint key is located at:

```bash
~/.okp4d/config/priv_validator_key.json
```

To see your validator's associated public key:

```bash
okp4d tendermint show-validator
```

To see your validator's associated bech32 address:

```bash
okp4d tendermint show-address
```

You can also use hardware to store your Tendermint Key much more safely, such as [YubiHSM2](https://developers.yubico.com/YubiHSM2/).

### Alerting and monitoring

Alerting and monitoring is desirable as well - you are encouraged to explore solutions and find one that works for your setup. Prometheus is available out-of-the box, and there are a variety of open-source tools. Recommended reading:

**Alerting:**

* Tenderduty: [https://github.com/blockpane/tenderduty](https://github.com/blockpane/tenderduty)
* PANIC: [https://github.com/SimplyVC/panic\_cosmos](https://github.com/SimplyVC/panic\_cosmos)

**Monitoring:**

* [https://medium.com/solar-labs-team/cosmos-how-to-monitoring-your-validator-892a46298722](https://medium.com/solar-labs-team/cosmos-how-to-monitoring-your-validator-892a46298722)
* [https://medium.com/simply-vc/cosmos-monitoring-and-alerting-for-validators-8e3f016c9567](https://medium.com/simply-vc/cosmos-monitoring-and-alerting-for-validators-8e3f016c9567)
* [https://chainflow.io/cosmos-validator-mission-control/](https://chainflow.io/cosmos-validator-mission-control/)
* [https://medium.com/cypher-core/cosmos-how-to-set-up-your-own-network-monitoring-dashboard-fe49c63a8271](https://medium.com/cypher-core/cosmos-how-to-set-up-your-own-network-monitoring-dashboard-fe49c63a8271)

#### Simple setup using Grafana Cloud

Using only the raw metrics endpoint provided by `okp4d` you can get a working dashboard and alerting setup using Grafana Cloud. This means you don't have to run Grafana on the instance.

1. First, in `config.toml` enable Prometheus. The default metrics port will be `26660`
2. Download Prometheus - this is needed to ship logs to Grafana Cloud.
3. Create a `prometheus.yml` file with your [Grafana Cloud credentials](https://grafana.com/docs/grafana-cloud/reference/create-api-key/) in the Prometheus folder. You can get these via the Grafana UI. Click 'details' on the Prometheus card:

```bash
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: cosmops
    static_configs:
    - targets: ['localhost:26660']
      labels:
        group: 'cosmops'

remote_write:
  - url: https://your-grafana-cloud-endpoint/api/prom/push
    basic_auth:
      username: ID_HERE
      password: "API KEY HERE"
```

3\. Set up a service file, with `sudo nano /etc/systemd/system/prometheus.service`, replacing `<your-user>` and `<prometheus-folder>` with the location of Prometheus. This sets the Prometheus port to `6666`

```bash
[Unit]
Description=prometheus
After=network-online.target

[Service]
User=<your-user>
ExecStart=/home/<your-user>/<prometheus-folder>/prometheus --config.file=/home/<your-user>/<prometheus-folder>/prometheus.yml --web.listen-address=:6666 --storage.tsdb.path=/home/<your-user>/<prometheus-folder>/data
Restart=always
RestartSec=3
LimitNOFILE=4096

[Install]
WantedBy=multi-user.target
/etc/systemd/system/prometheus.service
```

4\. Enable and start the service.

```bash
sudo -S systemctl daemon-reload
sudo -S systemctl enable prometheus
sudo systemctl start prometheus
```

5\. Import a dashboard to your Grafana. Search for 'Cosmos Validator' to find several options. You should see logs arriving in the dashboard after a couple of minutes.

For more info:

* [https://grafana.com/docs/grafana-cloud/quickstart/noagent\_linuxnode/](https://grafana.com/docs/grafana-cloud/quickstart/noagent\_linuxnode/)
* [https://forum.cosmos.network/t/monitoring-alerting-for-your-validator/446/28](https://forum.cosmos.network/t/monitoring-alerting-for-your-validator/446/28)

## Sentry Nodes (DDOS Protection)

Validators are responsible for ensuring that the network can sustain denial of service attacks.

One recommended way to mitigate these risks is for validators to carefully structure their network topology in a so-called sentry node architecture.

Validator nodes should only connect to full-nodes they trust because they operate them themselves or are run by other validators they know socially. A validator node will typically run in a data center. Most data centers provide direct links the networks of major cloud providers. The validator can use those links to connect to sentry nodes in the cloud. This shifts the burden of denial-of-service from the validator's node directly to its sentry nodes, and may require new sentry nodes be spun up or activated to mitigate attacks on existing ones.

Sentry nodes can be quickly spun up or change their IP addresses. Because the links to the sentry nodes are in private IP space, an internet based attacked cannot disturb them directly. This will ensure validator block proposals and votes always make it to the rest of the network.

::: tip
Read more about Sentry Nodes on the [forum](https://forum.cosmos.network/t/sentry-node-architecture-overview/454)
:::

To setup your sentry node architecture you can follow the instructions below:

Validators nodes should edit their `config.toml`:

```bash
# Comma separated list of nodes to keep persistent connections to
# Do not add private peers to this list if you don't want them advertised
persistent_peers =[list of sentry nodes]

# Set true to enable the peer-exchange reactor
pex = false
```

Sentry Nodes should edit their config.toml:

```bash
# Comma separated list of peer IDs to keep private (will not be gossiped to other peers)
# Example ID: 3e16af0cead27979e1fc3dac57d03df3c7a77acc@3.87.179.235:26656

private_peer_ids = "node_ids_of_private_peers"
```
