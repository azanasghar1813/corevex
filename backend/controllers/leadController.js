const Lead = require('../models/Lead');

// @desc    Create a new lead (from contact form)
// @route   POST /api/leads
// @access  Public
const createLead = async (req, res) => {
    try {
        const { name, email, phone, company, message } = req.body;
        
        const lead = new Lead({
            name,
            email,
            phone,
            company,
            message
        });

        const createdLead = await lead.save();
        res.status(201).json({ message: 'Lead submitted successfully', leadId: createdLead._id });
    } catch (error) {
        res.status(400).json({ message: 'Error submitting lead', error: error.message });
    }
};

// @desc    Get all leads
// @route   GET /api/leads
// @access  Private/Admin
const getLeads = async (req, res) => {
    try {
        const leads = await Lead.find({}).sort({ createdAt: -1 });
        res.json(leads);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Update lead status
// @route   PUT /api/leads/:id
// @access  Private/Admin
const updateLeadStatus = async (req, res) => {
    try {
        const lead = await Lead.findById(req.params.id);
        if (lead) {
            lead.status = req.body.status || lead.status;
            const updatedLead = await lead.save();
            res.json(updatedLead);
        } else {
            res.status(404).json({ message: 'Lead not found' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Error updating lead' });
    }
};

module.exports = {
    createLead,
    getLeads,
    updateLeadStatus
};
